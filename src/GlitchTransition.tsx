import { FC, useState, useEffect, useRef } from 'react';

// Re-using your Segment interface
interface Segment {
  text: string;
  color?: string; // Optional color for this segment
}

interface GlitchTextTransitionProps {
  segments: Segment[];
  intervalMs?: number; // How often to change segments in milliseconds (default: 3000ms)
  glitchDurationMs?: number; // How long the glitch effect lasts (default: 500ms)
  className?: string; // Optional className for the wrapper div
}

const GlitchTextTransition: FC<GlitchTextTransitionProps> = ({
  segments,
  intervalMs = 3000,
  glitchDurationMs = 500,
  className,
}) => {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Set up the interval for changing segments
    const intervalId = setInterval(() => {
      setIsGlitching(true); // Start glitching
      // Schedule turning off glitching after glitchDurationMs
      timeoutRef.current = setTimeout(() => {
        setCurrentSegmentIndex((prevIndex) => (prevIndex + 1) % segments.length);
        setIsGlitching(false); // Stop glitching
      }, glitchDurationMs);
    }, intervalMs);

    // Clean up interval and timeout on component unmount
    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [segments, intervalMs, glitchDurationMs]);

  const currentSegment = segments[currentSegmentIndex];

  return (
    <div className={`glitch-text-container ${className || ''} ${isGlitching ? 'glitching' : ''}`}>
      <span
        className="glitch-text"
        style={currentSegment.color ? { color: currentSegment.color } : {}}
      >
        {currentSegment.text}
      </span>
    </div>
  );
};

export default GlitchTextTransition;