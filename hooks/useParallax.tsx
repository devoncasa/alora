import { useEffect, useRef } from 'react';

/**
 * A custom hook to apply a smooth parallax effect to a referenced element on scroll.
 * @param speed - The speed factor for the parallax effect. A value between 0 and 1 is recommended.
 * @param easing - The easing factor for the smooth follow effect (lerp). A smaller value means smoother/slower follow.
 * @returns A React ref object to be attached to the target DOM element.
 */
export const useParallax = (speed: number, easing: number = 0.1) => {
    const ref = useRef<HTMLDivElement>(null);
    const targetY = useRef(0);
    const currentY = useRef(0);
    const initialScale = 1.02; // Prevents blurred edges

    useEffect(() => {
        // On scroll, update the target Y position we want to move towards.
        const handleScroll = () => {
            targetY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // The animation loop that runs every frame.
        let animationFrameId: number;
        const animate = () => {
            // Calculate the difference between the current and target positions.
            const diff = targetY.current - currentY.current;
            
            // Apply easing to smoothly move the current position towards the target.
            // This creates the "lag" or "smoothing" effect.
            currentY.current += diff * easing;

            // Apply the transform to the element.
            if (ref.current) {
                // Calculate the actual offset based on the smoothed position and speed factor.
                const parallaxOffset = currentY.current * speed;
                ref.current.style.transform = `scale(${initialScale}) translateY(${parallaxOffset}px)`;
            }

            // Continue the animation loop.
            animationFrameId = requestAnimationFrame(animate);
        };

        // Set the initial transform state before any scrolling happens.
        if (ref.current) {
            ref.current.style.transform = `scale(${initialScale}) translateY(0px)`;
        }
        
        // Start the animation loop.
        animationFrameId = requestAnimationFrame(animate);

        // Cleanup function to remove listeners and stop the animation loop.
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [speed, easing]); // Rerun the effect if speed or easing changes.

    return ref;
};
