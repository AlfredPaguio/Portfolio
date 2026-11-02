import { safeMediaUrl, videoSource } from "./media-source";
import { animateFeedback } from "./motion";
export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}
export interface GalleryElements {
  viewport: HTMLElement;
  counter: HTMLElement;
  title: HTMLElement;
  original: HTMLAnchorElement;
  zoom: HTMLElement;
  reset: HTMLButtonElement;
  zoomIn: HTMLButtonElement;
  zoomOut: HTMLButtonElement;
}
export interface GalleryConfig {
  elements: GalleryElements;
  allMedia: MediaItem[];
  onChange?: (index: number) => void;
}

export class GalleryManager {
  public currentIndex = 0;
  public readonly allMedia: MediaItem[];
  private elements: GalleryElements;
  private onChange?: GalleryConfig["onChange"];
  private controller?: AbortController;
  private image?: HTMLImageElement;
  private scale = 1;
  private x = 0;
  private y = 0;
  private animations = new Set<
    NonNullable<ReturnType<typeof animateFeedback>>
  >();

  private animate(element: HTMLElement, frames: Keyframe[], duration = 280) {
    const animation = animateFeedback(element, frames, duration);
    if (!animation) return;
    this.animations.add(animation);
    animation.finished.then(
      () => this.animations.delete(animation),
      () => this.animations.delete(animation),
    );
    return animation;
  }

  public cancelAnimations() {
    this.animations.forEach((animation) => animation.cancel());
    this.animations.clear();
    this.elements.viewport
      .querySelectorAll("[data-outgoing]")
      .forEach((element) => element.remove());
  }

  constructor(config: GalleryConfig) {
    this.elements = config.elements;
    this.allMedia = config.allMedia;
    this.onChange = config.onChange;
  }

  public update(index: number) {
    if (!this.allMedia.length || !Number.isInteger(index)) return;
    const direction = this.controller
      ? Math.sign(index - this.currentIndex)
      : 0;
    const incomingIndex =
      ((index % this.allMedia.length) + this.allMedia.length) %
      this.allMedia.length;
    if (this.controller && incomingIndex === this.currentIndex) return;
    const { viewport } = this.elements;
    let outgoing: HTMLImageElement | undefined;
    if (
      this.image?.naturalWidth &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const bounds = this.image.getBoundingClientRect();
      const stage = viewport.getBoundingClientRect();
      outgoing = this.image.cloneNode() as HTMLImageElement;
      outgoing.alt = "";
      outgoing.dataset.outgoing = "";
      outgoing.className = "pointer-events-none absolute object-contain";
      outgoing.style.cssText = `left:${bounds.left - stage.left}px;top:${bounds.top - stage.top}px;width:${bounds.width}px;height:${bounds.height}px;`;
    }
    this.cleanup();
    if (outgoing) {
      viewport.append(outgoing);
      const animation = this.animate(outgoing, [
        { transform: "translateX(0)", opacity: 1 },
        {
          transform: `translateX(${-direction * viewport.clientWidth}px)`,
          opacity: 0,
        },
      ]);
      const ghost = outgoing;
      animation?.finished.then(
        () => ghost.remove(),
        () => ghost.remove(),
      );
    }
    this.controller = new AbortController();
    const { signal } = this.controller;
    this.currentIndex =
      ((index % this.allMedia.length) + this.allMedia.length) %
      this.allMedia.length;
    const item = this.allMedia[this.currentIndex];
    const { counter, title, original, zoom } = this.elements;
    counter.textContent = `${this.currentIndex + 1} / ${this.allMedia.length}`;
    title.textContent =
      item.alt || (item.type === "video" ? "Video demo" : "Project screenshot");
    original.hidden = !safeMediaUrl(item.src);
    original.href = safeMediaUrl(item.src) || "#";
    zoom.hidden = item.type !== "image";
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.onChange?.(this.currentIndex);

    const status = document.createElement("p");
    status.className =
      "pointer-events-none absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-neutral-300";
    status.setAttribute("role", "status");
    status.textContent = "Loading preview…";
    viewport.append(status);
    const fail = () => {
      status.hidden = false;
      status.textContent =
        "Preview unavailable. Choose Open original to view this media.";
      zoom.hidden = true;
    };
    if (item.type === "video") {
      const source = videoSource(item.src);
      if (!source) {
        fail();
        return;
      }
      if (source.native) {
        const player = document.createElement("video");
        player.src = source.src;
        player.controls = true;
        player.playsInline = true;
        player.preload = "metadata";
        player.setAttribute("aria-label", item.alt || "Project video demo");
        player.className = "size-full object-contain";
        player.addEventListener(
          "loadedmetadata",
          () => {
            status.hidden = true;
          },
          { signal },
        );
        player.addEventListener("error", fail, { signal });
        viewport.append(player);
      } else {
        const frame = document.createElement("iframe");
        frame.src = source.src;
        frame.title = item.alt || "Project video demo";
        frame.allowFullscreen = true;
        frame.allow =
          "autoplay; encrypted-media; picture-in-picture; fullscreen";
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        frame.className = "aspect-video max-h-full w-full border-0";
        frame.addEventListener(
          "load",
          () => {
            status.hidden = true;
          },
          { signal },
        );
        frame.addEventListener("error", fail, { signal });
        viewport.append(frame);
      }
      return;
    }
    if (!safeMediaUrl(item.src)) {
      fail();
      return;
    }
    const img = document.createElement("img");
    this.image = img;
    img.alt = item.alt || "Project screenshot";
    img.draggable = false;
    img.className =
      "block max-h-full max-w-full touch-none object-contain select-none";
    img.addEventListener(
      "load",
      () => {
        status.hidden = true;
        this.transform();
        if (direction)
          this.animate(img, [
            {
              transform: `translateX(${direction * viewport.clientWidth}px)`,
              opacity: 0.3,
            },
            { transform: "translateX(0)", opacity: 1 },
          ]);
      },
      { signal },
    );
    img.addEventListener(
      "error",
      () => {
        img.hidden = true;
        fail();
      },
      { signal },
    );
    img.src = item.src;
    viewport.append(img);
    this.transform();
    this.controls(img, signal);
    window.addEventListener("resize", () => this.transform(), { signal });
  }

  public zoomBy(delta: number, reset = false) {
    if (!this.image || !this.image.complete || !this.image.naturalWidth) return;
    this.cancelAnimations();
    this.scale = reset ? 1 : Math.max(1, Math.min(4, this.scale + delta));
    if (this.scale === 1) {
      this.x = 0;
      this.y = 0;
    }
    this.transform();
  }

  private transform() {
    const img = this.image;
    if (!img) return;
    const { viewport, reset, zoomIn, zoomOut } = this.elements;
    const spaceX =
      viewport.clientWidth - (viewport.clientWidth >= 640 ? 48 : 24);
    const spaceY =
      viewport.clientHeight - (viewport.clientWidth >= 640 ? 48 : 24);
    const limitX = Math.max(0, (img.offsetWidth * this.scale - spaceX) / 2);
    const limitY = Math.max(0, (img.offsetHeight * this.scale - spaceY) / 2);
    this.x = Math.max(-limitX, Math.min(limitX, this.x));
    this.y = Math.max(-limitY, Math.min(limitY, this.y));
    img.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    img.style.cursor = this.scale > 1 ? "grab" : "zoom-in";
    reset.textContent = `${Math.round(this.scale * 100)}%`;
    reset.setAttribute(
      "aria-label",
      `Reset image zoom (${Math.round(this.scale * 100)}%)`,
    );
    zoomOut.disabled = this.scale <= 1;
    zoomIn.disabled = this.scale >= 4;
  }

  private controls(img: HTMLImageElement, signal: AbortSignal) {
    const pointers = new Map<number, { x: number; y: number }>();
    let start = { x: 0, y: 0 },
      last = { x: 0, y: 0 };
    let distance = 0,
      pinchScale = 1,
      pinched = false;
    let lastTap = { time: 0, x: 0, y: 0 };
    let lastTouchTime = 0;
    const gap = () => {
      const [a, b] = [...pointers.values()];
      return Math.hypot(a.x - b.x, a.y - b.y);
    };
    img.addEventListener(
      "pointerdown",
      (e) => {
        if (e.button !== 0) return;
        this.cancelAnimations();
        img.setPointerCapture(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        start = last = { x: e.clientX, y: e.clientY };
        if (pointers.size === 1) pinched = false;
        if (pointers.size === 2) {
          pinched = true;
          distance = gap();
          pinchScale = this.scale;
        }
      },
      { signal },
    );
    img.addEventListener(
      "pointermove",
      (e) => {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 2 && distance > 0) {
          this.scale = Math.max(
            1,
            Math.min(4, (pinchScale * gap()) / distance),
          );
          this.transform();
        } else if (pointers.size === 1 && this.scale > 1) {
          this.x += e.clientX - last.x;
          this.y += e.clientY - last.y;
          this.transform();
        } else if (
          pointers.size === 1 &&
          !pinched &&
          this.allMedia.length > 1
        ) {
          // Follow the finger before committing to the next slide.
          img.style.transform = `translateX(${(e.clientX - start.x) * 0.65}px)`;
        }
        last = { x: e.clientX, y: e.clientY };
      },
      { signal },
    );
    const end = (e: PointerEvent) => {
      if (e.pointerType === "touch") lastTouchTime = Date.now();
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      if (img.hasPointerCapture(e.pointerId))
        img.releasePointerCapture(e.pointerId);
      if (pointers.size) {
        last = [...pointers.values()][0];
        return;
      }
      const dx = e.clientX - start.x,
        dy = e.clientY - start.y;
      if (e.type !== "pointerup" || pinched) {
        this.transform();
        return;
      }
      if (
        this.scale === 1 &&
        Math.abs(dx) > 60 &&
        Math.abs(dx) > Math.abs(dy) * 1.5
      ) {
        lastTap.time = 0;
        if (this.allMedia.length > 1)
          this.update(this.currentIndex + (dx < 0 ? 1 : -1));
      } else {
        if (this.scale === 1) {
          const from = img.style.transform;
          this.transform();
          this.animate(
            img,
            [{ transform: from }, { transform: img.style.transform }],
            200,
          );
        }
        if (Math.hypot(dx, dy) >= 10 || e.pointerType !== "touch") return;
        const now = Date.now();
        if (
          now - lastTap.time < 300 &&
          Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 30
        ) {
          this.zoomBy(this.scale === 1 ? 1 : 0, this.scale > 1);
          lastTap.time = 0;
        } else lastTap = { time: now, x: e.clientX, y: e.clientY };
      }
    };
    img.addEventListener("pointerup", end, { signal });
    img.addEventListener("pointercancel", end, { signal });
    img.addEventListener(
      "dblclick",
      (e) => {
        if (Date.now() - lastTouchTime < 500) return;
        this.zoomBy(this.scale === 1 ? 1 : 0, this.scale > 1);
      },
      { signal },
    );
    this.elements.viewport.addEventListener(
      "wheel",
      (e) => {
        // Preserve browser page zoom for Ctrl/Command+wheel.
        if (e.ctrlKey || e.metaKey || !e.deltaY) return;
        e.preventDefault();
        this.zoomBy(e.deltaY > 0 ? -0.25 : 0.25);
      },
      { signal, passive: false },
    );
  }

  public cleanup() {
    this.cancelAnimations();
    this.controller?.abort();
    this.controller = undefined;
    this.elements.viewport.querySelector("video")?.pause();
    this.elements.viewport.replaceChildren();
    this.image = undefined;
  }
}
