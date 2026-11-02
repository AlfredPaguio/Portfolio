import { animate } from "motion/mini";

export function animateFeedback(
  element: HTMLElement,
  frames: Keyframe[],
  duration = 200,
) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const original = {
    transform: element.style.transform,
    opacity: element.style.opacity,
  };
  const animation = animate(
    element,
    {
      ...(frames.some((frame) => frame.transform !== undefined)
        ? { transform: frames.map((frame) => String(frame.transform)) }
        : {}),
      ...(frames.some((frame) => frame.opacity !== undefined)
        ? { opacity: frames.map((frame) => Number(frame.opacity)) }
        : {}),
    },
    { duration: duration / 1000, ease: [0.22, 1, 0.36, 1] },
  );
  let cancelled = false;
  const cancel = () => {
    if (cancelled) return;
    cancelled = true;
    animation.cancel();
    element.style.transform = original.transform;
    element.style.opacity = original.opacity;
  };
  const finished = animation.finished.then(cancel, cancel);
  return { cancel, finished };
}
