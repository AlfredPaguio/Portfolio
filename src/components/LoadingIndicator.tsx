import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingIndicatorProps {
  onLoadComplete: () => void; // Make the callback optional
}

function LoadingIndicator({ onLoadComplete }: LoadingIndicatorProps) {

  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;

    gsap.to(loader, {
      width: "100%",
      duration: 2,
      onComplete: () => {
        onLoadComplete();
      },
    });
  }, [onLoadComplete]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center">
      <div className="h-2 w-full bg-primary">
        <div
          ref={loaderRef}
          className="h-2 bg-accent transition-all duration-1000"
        ></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-white">Loading...</p>
    </div>
  );
}

export default LoadingIndicator;