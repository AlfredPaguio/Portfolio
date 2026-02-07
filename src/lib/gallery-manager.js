export class GalleryManager {
  constructor(config) {
    this.elements = config.elements;
    this.allMedia = config.allMedia;
    this.onDoubleTap = config.onDoubleTap;

    this.currentIndex = 0;
    this.scale = 1;
    this.x = 0;
    this.y = 0;

    this.isDragging = false; // Pan when zoomed
    this.isSwiping = false; // Change slide when not zoomed

    this.startX = 0;
    this.startY = 0;
    this.touchStartX = 0;
    this.initialPinchDist = 0;
    this.swipeThreshold = 50;

    this.abortController = null;
  }

  getEmbedUrl(url) {
    return url.includes("youtube.com/watch?v=")
      ? url.replace("watch?v=", "embed/")
      : url;
  }

  applyTransform(el) {
    if (!el) return;
    el.style.transform = `translate3d(${this.x}px, ${this.y}px, 0) scale(${this.scale})`;
  }

  update(index, direction = "next") {
    const { viewport, counter, title, downloadBtn } = this.elements;
    viewport.innerHTML = "";
    this.currentIndex = index;
    const item = this.allMedia[this.currentIndex];

    counter.innerText = `${index + 1} / ${this.allMedia.length}`;
    title.innerText = item.alt || "";
    downloadBtn.href = item.src;
    downloadBtn.style.display = item.type === "video" ? "none" : "flex";

    this.scale = 1;
    this.x = 0;
    this.y = 0;

    if (item.type === "video") {
      viewport.innerHTML = `<iframe src="${this.getEmbedUrl(item.src)}" class="h-full w-full border-0 select-none" allowfullscreen></iframe>`;
      return;
    }

    const img = document.createElement("img");
    img.src = item.src;
    img.draggable = false;
    img.className =
      "max-h-full max-w-full object-contain cursor-grab active:cursor-grabbing select-none transition-all duration-400";

    const offset = direction === "next" ? 50 : -50;
    img.style.transform = `translate3d(${offset}px, 0, 0) scale(0.95)`;
    img.style.opacity = "0";

    viewport.appendChild(img);

    requestAnimationFrame(() => {
      img.style.transition =
        "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s";
      img.style.transform = "translate3d(0, 0, 0) scale(1)";
      img.style.opacity = "1";
      this.initAdvancedControls(img);
    });
  }

  initAdvancedControls(img) {
    this.abortController?.abort();
    this.abortController = new AbortController();
    const { signal } = this.abortController;

    const doubleTap = this.onDoubleTap({
      callback: () => {
        img.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
        this.scale = this.scale > 1 ? 1 : 2.5;
        this.x = 0;
        this.y = 0;
        this.applyTransform(img);
      },
    });

    // Wheel Zoom (Desktop)
    this.elements.viewport.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.3 : 0.3;
        this.scale = Math.min(Math.max(1, this.scale + delta), 5);
        if (this.scale === 1) {
          this.x = 0;
          this.y = 0;
        }
        this.applyTransform(img);
      },
      { signal, passive: false },
    );

    // Double Click (Desktop)
    img.addEventListener(
      "dblclick",
      () => {
        img.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
        this.scale = this.scale > 1 ? 1 : 2.5;
        this.x = 0;
        this.y = 0;
        this.applyTransform(img);
      },
      { signal },
    );

    // Pointer Down (Mouse/Touch Start)
    const handleStart = (clientX, clientY) => {
      if (this.scale <= 1) {
        this.isSwiping = true;
        this.touchStartX = clientX;
        img.style.transition = "none"; // Stop transitions while finger is down
      } else {
        this.isDragging = true;
        this.startX = clientX - this.x;
        this.startY = clientY - this.y;
      }
    };

    img.addEventListener(
      "mousedown",
      (e) => handleStart(e.clientX, e.clientY),
      { signal },
    );

    img.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 2) {
          this.initialPinchDist = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY,
          );
          return;
        }
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
      },
      { signal },
    );

    // Move Logic (Pan & Swipe)
    const handleMove = (clientX, clientY) => {
      if (this.isDragging) {
        this.x = clientX - this.startX;
        this.y = clientY - this.startY;
        this.applyTransform(img);
      } else if (this.isSwiping) {
        this.x = clientX - this.touchStartX;
        this.applyTransform(img);
      }
    };

    window.addEventListener(
      "mousemove",
      (e) => handleMove(e.clientX, e.clientY),
      { signal },
    );
    img.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length === 2) {
          e.preventDefault();
          const dist = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY,
          );
          this.scale = Math.min(
            Math.max(1, (dist / this.initialPinchDist) * this.scale),
            5,
          );
          this.initialPinchDist = dist;
          this.applyTransform(img);
          return;
        }
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      },
      { signal, passive: false },
    );

    // End Logic (Snap back or Change Slide)
    const handleEnd = (endX) => {
      if (!this.isSwiping) {
        this.isDragging = false;
        return;
      }

      this.isSwiping = false;
      const deltaX = endX - this.touchStartX;

      // Only trigger swipe if user moved more than 10px
      // This prevents conflict with Double Tap
      if (Math.abs(deltaX) > 10) {
        if (Math.abs(deltaX) > this.swipeThreshold) {
          const dir = deltaX > 0 ? "prev" : "next";
          this.x = deltaX > 0 ? window.innerWidth : -window.innerWidth;
          this.applyTransform(img);
          setTimeout(() => {
            this.update(
              dir === "prev"
                ? (this.currentIndex - 1 + this.allMedia.length) %
                    this.allMedia.length
                : (this.currentIndex + 1) % this.allMedia.length,
              dir,
            );
          }, 200);
        } else {
          img.style.transition = "transform 0.3s cubic-bezier(0.2, 1, 0.3, 1)";
          this.x = 0;
          this.applyTransform(img);
        }
      } else {
        // If movement was tiny, it's likely a tap. Just reset x instantly.
        img.style.transition = "transform 0.3s cubic-bezier(0.2, 1, 0.3, 1)";
        this.x = 0;
        this.applyTransform(img);
      }
      this.isDragging = false;
    };

    window.addEventListener("mouseup", (e) => handleEnd(e.clientX), { signal });
    img.addEventListener(
      "touchend",
      (e) => {
        handleEnd(e.changedTouches[0].clientX);
        if (e.touches.length === 0) doubleTap(e);
      },
      { signal },
    );
  }

  cleanup() {
    this.abortController?.abort();
    this.elements.viewport.innerHTML = "";
  }
}
