type TapEvent = PointerEvent | MouseEvent | TouchEvent;

interface DoubleTapOptions {
  callback: (event: TapEvent) => void;
  delay?: number; // max time between taps (ms)
  tolerance?: number; // max movement allowed (px)
}

export function onDoubleTap({
  callback,
  delay = 300,
  tolerance = 25,
}: DoubleTapOptions) {
  let lastTapTime = 0;
  let lastX = 0;
  let lastY = 0;

  return function (event: TapEvent) {
    const now = Date.now();
    const point = getPoint(event);

    if (!point) return;

    const timeDelta = now - lastTapTime;
    const distance = Math.hypot(point.x - lastX, point.y - lastY);

    if (timeDelta > 0 && timeDelta < delay && distance < tolerance) {
      callback(event);
      lastTapTime = 0; // reset to avoid triple-tap
      return;
    }

    lastTapTime = now;
    lastX = point.x;
    lastY = point.y;
  };
}

function getPoint(event: PointerEvent | MouseEvent | TouchEvent) {
  if ("changedTouches" in event) {
    const touch = event.changedTouches[0];
    if (!touch) return null;
    return { x: touch.clientX, y: touch.clientY };
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
}
