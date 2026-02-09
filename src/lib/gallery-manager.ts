export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface GalleryElements {
  viewport: HTMLElement;
  counter: HTMLElement;
  title: HTMLElement;
  downloadBtn: HTMLAnchorElement;
}

export interface GalleryConfig {
  elements: GalleryElements;
  allMedia: MediaItem[];
}

export class GalleryManager {
  private elements: GalleryElements;
  public allMedia: MediaItem[];

  public currentIndex: number = 0;

  //  Transform State
  private scale: number = 1;
  private currentX: number = 0;
  private currentY: number = 0;

  //  Interaction State
  private isDragging: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private lastX: number = 0;
  private lastY: number = 0;
  private isZoomed: boolean = false;

  //  Pinch & Tap State
  private evCache: PointerEvent[] = [];
  private prevDiff: number = -1;
  private initialScale: number = 1;

  // Double Tap
  private lastTapTime: number = 0;
  // private lastTapPos: { x: number; y: number } | null = null;

  private abortController: AbortController | null = null;

  //  Constants
  private readonly MAX_SCALE = 4;
  private readonly SWIPE_THRESHOLD = 50;
  private readonly DOUBLE_TAP_DELAY = 300; // ms
  private readonly TAP_TOLERANCE = 10; // px (movement allowed during a tap)

  constructor(config: GalleryConfig) {
    this.elements = config.elements;
    this.allMedia = config.allMedia;
  }

  private getEmbedUrl(url: string): string {
    return url.includes("youtube.com/watch?v=")
      ? url.replace("watch?v=", "embed/")
      : url;
  }

  private applyTransform(el: HTMLElement, duration: number = 0) {
    if (!el) return;
    el.style.transition =
      duration > 0
        ? `transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`
        : "none";
    el.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0) scale(${this.scale})`;
  }

  public update(index: number, direction: "next" | "prev" | "init" = "init") {
    const { viewport, counter, title, downloadBtn } = this.elements;

    // Reset Everything
    this.currentIndex = index;
    this.scale = 1;
    this.currentX = 0;
    this.currentY = 0;
    this.isZoomed = false;
    this.evCache = [];

    const item = this.allMedia[this.currentIndex];

    // Update UI
    counter.innerText = `${index + 1} / ${this.allMedia.length}`;
    title.innerText = item.alt || "";
    downloadBtn.href = item.src;
    downloadBtn.style.display = item.type === "video" ? "none" : "flex";

    viewport.innerHTML = "";

    if (item.type === "video") {
      viewport.innerHTML = `<iframe src="${this.getEmbedUrl(item.src)}" class="h-full w-full border-0 select-none" allowfullscreen></iframe>`;
      return;
    }

    const img = document.createElement("img");
    img.src = item.src;
    img.draggable = false;
    img.className =
      "max-h-full max-w-full object-contain select-none touch-none will-change-transform";

    if (direction !== "init") {
      const offset = direction === "next" ? 50 : -50;
      img.style.transform = `translate3d(${offset}px, 0, 0) scale(0.95)`;
      img.style.opacity = "0";
      img.style.transition =
        "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s";
    }

    viewport.appendChild(img);

    requestAnimationFrame(() => {
      img.style.transform = "translate3d(0, 0, 0) scale(1)";
      img.style.opacity = "1";
      this.initControls(img);
    });
  }

  private initControls(img: HTMLImageElement) {
    this.abortController?.abort();
    this.abortController = new AbortController();
    const { signal } = this.abortController;

    //  Pointer Down
    const handlePointerDown = (e: PointerEvent) => {
      img.setPointerCapture(e.pointerId);
      this.evCache.push(e);

      this.isDragging = true;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.lastX = this.currentX;
      this.lastY = this.currentY;

      // Stop momentum/transitions so controls feel instant
      img.style.transition = "none";

      // Initialize Pinch if 2 fingers
      if (this.evCache.length === 2) {
        this.initialScale = this.scale;
        this.prevDiff = Math.hypot(
          this.evCache[0].clientX - this.evCache[1].clientX,
          this.evCache[0].clientY - this.evCache[1].clientY,
        );
      }
    };

    //  Pointer Move
    const handlePointerMove = (e: PointerEvent) => {
      const index = this.evCache.findIndex(
        (cached) => cached.pointerId === e.pointerId,
      );
      if (index > -1) this.evCache[index] = e;

      if (!this.isDragging) return;

      // PINCH ZOOM
      if (this.evCache.length === 2) {
        const curDiff = Math.hypot(
          this.evCache[0].clientX - this.evCache[1].clientX,
          this.evCache[0].clientY - this.evCache[1].clientY,
        );

        if (this.prevDiff > 0) {
          const zoomFactor = curDiff / this.prevDiff;
          this.scale = Math.min(
            Math.max(1, this.initialScale * zoomFactor),
            this.MAX_SCALE,
          );
          this.isZoomed = this.scale > 1;
          this.applyTransform(img);
        }
        return;
      }

      // PAN / SWIPE
      if (this.evCache.length === 1) {
        const deltaX = e.clientX - this.startX;
        const deltaY = e.clientY - this.startY;

        if (this.scale === 1) {
          // Swipe Logic (Horizontal only, with resistance)
          this.currentX = deltaX * 0.6; // 0.6 = resistance
          this.currentY = 0;
        } else {
          // Pan Logic (Free movement)
          this.currentX = this.lastX + deltaX;
          this.currentY = this.lastY + deltaY;
          this.applyResistance(img); // Rubber-banding
        }
        this.applyTransform(img);
      }
    };

    //  Pointer Up
    const handlePointerUp = (e: PointerEvent) => {
      const index = this.evCache.findIndex(
        (cached) => cached.pointerId === e.pointerId,
      );
      if (index > -1) this.evCache.splice(index, 1);
      img.releasePointerCapture(e.pointerId);

      if (this.evCache.length < 2) this.prevDiff = -1;
      if (this.evCache.length > 0) return; // Still fingers on screen

      this.isDragging = false;

      // CHECK FOR TAP / DOUBLE TAP
      // If we moved less than TOLERANCE, it's a tap
      const distMoved = Math.hypot(
        e.clientX - this.startX,
        e.clientY - this.startY,
      );

      if (distMoved < this.TAP_TOLERANCE) {
        const now = Date.now();
        if (
          this.lastTapTime &&
          now - this.lastTapTime < this.DOUBLE_TAP_DELAY
        ) {
          //  DOUBLE TAP DETECTED
          this.handleDoubleTap(img, e.clientX, e.clientY);
          this.lastTapTime = 0; // Reset
        } else {
          //  SINGLE TAP DETECTED
          this.lastTapTime = now;
          // this.lastTapPos = { x: e.clientX, y: e.clientY };
        }

        // Reset position if we slightly nudged it while tapping
        if (this.scale === 1) {
          this.currentX = 0;
          this.applyTransform(img, 0.3);
        }
        return;
      }

      // HANDLE SWIPE END
      if (this.scale === 1) {
        if (Math.abs(this.currentX) > this.SWIPE_THRESHOLD) {
          const dir = this.currentX > 0 ? "prev" : "next";
          this.currentX =
            this.currentX > 0 ? window.innerWidth : -window.innerWidth;
          this.applyTransform(img, 0.3);
          setTimeout(() => {
            const len = this.allMedia.length;
            const nextIndex =
              dir === "next"
                ? (this.currentIndex + 1) % len
                : (this.currentIndex - 1 + len) % len;
            this.update(nextIndex, dir);
          }, 250);
        } else {
          // Snap back
          this.currentX = 0;
          this.applyTransform(img, 0.3);
        }
      } else {
        // HANDLE PAN END (Snap back if out of bounds)
        this.snapBackToBounds(img);
      }
    };

    img.addEventListener("pointerdown", handlePointerDown, { signal });
    img.addEventListener("pointermove", handlePointerMove, { signal });
    img.addEventListener("pointerup", handlePointerUp, { signal });
    img.addEventListener("pointercancel", handlePointerUp, { signal });

    // Wheel Zoom (Desktop fallback)
    this.elements.viewport.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.5 : 0.5;
        const newScale = Math.min(
          Math.max(1, this.scale + delta),
          this.MAX_SCALE,
        );
        this.scale = newScale;
        if (newScale === 1) {
          this.currentX = 0;
          this.currentY = 0;
        }
        this.snapBackToBounds(img); // Ensures we don't zoom out into void
      },
      { signal, passive: false },
    );
  }

  //  Logic Helpers

  private handleDoubleTap(
    img: HTMLImageElement,
    clientX: number,
    clientY: number,
  ) {
    if (this.scale > 1) {
      // Zoom Out
      this.scale = 1;
      this.currentX = 0;
      this.currentY = 0;
    } else {
      // Zoom In
      this.scale = 2.5;

      // Calculate zoom toward tap position
      // This centers the tap point approximately.
      const rect = img.getBoundingClientRect();
      const offsetX = clientX - rect.left - rect.width / 2;
      const offsetY = clientY - rect.top - rect.height / 2;

      this.currentX = -offsetX * 1.5;
      this.currentY = -offsetY * 1.5;
    }
    this.applyTransform(img, 0.4);
    this.snapBackToBounds(img); // Ensure we didn't zoom into empty space
  }

  // Soft limit during dragging (Rubberbanding)
  private applyResistance(img: HTMLImageElement) {
    const { minX, maxX, minY, maxY } = this.getBoundaries(img);

    // X Axis Resistance
    if (this.currentX > maxX) {
      this.currentX = maxX + (this.currentX - maxX) * 0.3;
    } else if (this.currentX < minX) {
      this.currentX = minX + (this.currentX - minX) * 0.3;
    }

    // Y Axis Resistance
    if (this.currentY > maxY) {
      this.currentY = maxY + (this.currentY - maxY) * 0.3;
    } else if (this.currentY < minY) {
      this.currentY = minY + (this.currentY - minY) * 0.3;
    }
  }

  // Hard limit after dragging stops
  private snapBackToBounds(img: HTMLImageElement) {
    const { minX, maxX, minY, maxY } = this.getBoundaries(img);

    let targetX = this.currentX;
    let targetY = this.currentY;

    // Clamp X
    if (targetX > maxX) targetX = maxX;
    else if (targetX < minX) targetX = minX;

    // Clamp Y
    if (targetY > maxY) targetY = maxY;
    else if (targetY < minY) targetY = minY;

    if (targetX !== this.currentX || targetY !== this.currentY) {
      this.currentX = targetX;
      this.currentY = targetY;
      this.applyTransform(img, 0.3);
    } else {
      this.applyTransform(img); // Just apply the current state
    }
  }

  // Calculates the valid range for X and Y translation
  private getBoundaries(img: HTMLImageElement) {
    const viewW = this.elements.viewport.clientWidth;
    const viewH = this.elements.viewport.clientHeight;

    // Current actual dimensions
    const renderW = img.width * this.scale;
    const renderH = img.height * this.scale;

    // The logic:
    // If image < viewport, it must be centered (min=0, max=0)
    // If image > viewport, we can move it by (ImageSize - ViewSize) / 2 in either direction

    let limitX = 0;
    let limitY = 0;

    if (renderW > viewW) {
      limitX = (renderW - viewW) / 2;
    }
    if (renderH > viewH) {
      limitY = (renderH - viewH) / 2;
    }

    // transform limits are symmetrical around 0
    return {
      minX: -limitX,
      maxX: limitX,
      minY: -limitY,
      maxY: limitY,
    };
  }

  public cleanup() {
    this.abortController?.abort();
    this.elements.viewport.innerHTML = "";
  }
}
