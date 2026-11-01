import { GalleryManager, type MediaItem } from "./gallery-manager";

class ProjectGallery extends HTMLElement {
  private controller?: AbortController;
  private manager?: GalleryManager;
  private unlock?: () => void;

  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    const { signal } = this.controller;
    const get = <T extends HTMLElement>(selector: string) =>
      this.querySelector<T>(selector)!;
    const dialog = get<HTMLDialogElement>("dialog");
    const media: MediaItem[] = JSON.parse(this.dataset.gallery || "[]");
    const selectors = [
      ...this.querySelectorAll<HTMLButtonElement>("[data-select]"),
    ];
    let opener: HTMLAnchorElement | null = null;
    this.manager = new GalleryManager({
      allMedia: media,
      elements: {
        viewport: get("[data-viewport]"),
        counter: get("[data-counter]"),
        title: get("[data-title]"),
        original: get<HTMLAnchorElement>("[data-original]"),
        zoom: get("[data-zoom]"),
        reset: get<HTMLButtonElement>("[data-reset]"),
        zoomIn: get<HTMLButtonElement>("[data-zoom-in]"),
        zoomOut: get<HTMLButtonElement>("[data-zoom-out]"),
      },
      onChange: (index) => {
        selectors.forEach((button, i) =>
          button.setAttribute("aria-current", String(i === index)),
        );
        const current = selectors[index];
        if (current) {
          const rail = current.parentElement!;
          // Scroll the rail only; scrollIntoView can move the underlying page.
          rail.scrollTo({
            left:
              current.offsetLeft -
              rail.offsetLeft -
              rail.clientWidth / 2 +
              current.clientWidth / 2,
            behavior: "instant",
          });
        }
      },
    });
    const manager = this.manager;
    this.querySelectorAll<HTMLAnchorElement>("[data-open]").forEach(
      (trigger) => {
        trigger.addEventListener(
          "click",
          (event) => {
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey ||
              event.button !== 0
            )
              return;
            event.preventDefault();
            opener = trigger;
            // Preserve layout width and restore existing inline styles on close.
            const root = document.documentElement;
            const previousOverflow = root.style.overflow;
            const previousPadding = root.style.paddingRight;
            const gutter = window.innerWidth - root.clientWidth;
            if (gutter > 0)
              root.style.paddingRight = `${parseFloat(getComputedStyle(root).paddingRight) + gutter}px`;
            root.style.overflow = "hidden";
            this.unlock = () => {
              root.style.overflow = previousOverflow;
              root.style.paddingRight = previousPadding;
            };
            dialog.showModal();
            manager.update(Number(trigger.dataset.open));
          },
          { signal },
        );
      },
    );
    get("[data-close]").addEventListener("click", () => dialog.close(), {
      signal,
    });
    const previous = get<HTMLButtonElement>("[data-prev]");
    const next = get<HTMLButtonElement>("[data-next]");
    previous.disabled = next.disabled = media.length < 2;
    previous.addEventListener(
      "click",
      () => manager.update(manager.currentIndex - 1),
      { signal },
    );
    next.addEventListener(
      "click",
      () => manager.update(manager.currentIndex + 1),
      { signal },
    );
    selectors.forEach((button, index) =>
      button.addEventListener("click", () => manager.update(index), { signal }),
    );
    get("[data-zoom-in]").addEventListener("click", () => manager.zoomBy(0.5), {
      signal,
    });
    get("[data-zoom-out]").addEventListener(
      "click",
      () => manager.zoomBy(-0.5),
      { signal },
    );
    get("[data-reset]").addEventListener(
      "click",
      () => manager.zoomBy(0, true),
      { signal },
    );
    dialog.addEventListener(
      "keydown",
      (event) => {
        if (
          event.target instanceof HTMLVideoElement ||
          event.ctrlKey ||
          event.metaKey ||
          event.altKey
        )
          return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          manager.update(
            manager.currentIndex + (event.key === "ArrowLeft" ? -1 : 1),
          );
        }
        if (["+", "=", "-", "0"].includes(event.key)) {
          event.preventDefault();
          manager.zoomBy(event.key === "-" ? -0.5 : 0.5, event.key === "0");
        }
      },
      { signal },
    );
    dialog.addEventListener(
      "close",
      () => {
        manager.cleanup();
        this.unlock?.();
        this.unlock = undefined;
        opener?.focus({ preventScroll: true });
      },
      { signal },
    );
    let backdropDown = false;
    dialog.addEventListener(
      "pointerdown",
      (event) => {
        backdropDown = event.target === dialog;
      },
      { signal },
    );
    dialog.addEventListener(
      "click",
      (event) => {
        if (backdropDown && event.target === dialog) dialog.close();
      },
      { signal },
    );
    document.addEventListener(
      "astro:before-swap",
      () => {
        dialog.close();
        this.dispose();
      },
      { signal },
    );
  }

  private dispose() {
    this.controller?.abort();
    this.manager?.cleanup();
    this.unlock?.();
    this.unlock = undefined;
  }
  disconnectedCallback() {
    this.dispose();
  }
}
if (!customElements.get("project-gallery"))
  customElements.define("project-gallery", ProjectGallery);
