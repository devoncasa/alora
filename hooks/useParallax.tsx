import { useEffect, useRef } from 'react';

/**
 * A custom hook to apply a parallax effect to a referenced element on scroll.
 * @param speed - The speed factor for the parallax effect. A value between 0 and 1 is recommended.
 * e.g., 0.3 means the element will move at 30% of the scroll speed.
 * @returns A React ref object to be attached to the target DOM element.
 */
export const useParallax = (speed: number) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        // The initial scale to prevent blurred edges
        const initialScale = 1.02;

        const handleScroll = () => {
            // Cancel the previous animation frame to avoid unnecessary updates
            cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                if (ref.current) {
                    const yOffset = window.scrollY;
                    // Apply both the initial scale and the new translateY for the parallax effect
                    ref.current.style.transform = `scale(${initialScale}) translateY(${yOffset * speed}px)`;
                }
            });
        };
        
        // Set the initial transform state before any scrolling happens
        if (ref.current) {
            ref.current.style.transform = `scale(${initialScale}) translateY(0px)`;
        }

        // Add passive event listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function to remove the event listener and cancel any pending animation frame
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [speed]); // Rerun the effect if the speed changes

    return ref;
};
