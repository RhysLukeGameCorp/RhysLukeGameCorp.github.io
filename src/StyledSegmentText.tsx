import { FC } from 'react';

interface Segment {
  text: string;
  color?: string; // Optional color for this segment
}

interface StyledSegmentTextProps {
  segments: Segment[];
  className?: string; // Optional className for the wrapper span
}

const StyledSegmentText: FC<StyledSegmentTextProps> = ({ segments, className }) => {
  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <span key={index} style={segment.color ? { color: segment.color } : {}}>
          {segment.text}
        </span>
      ))}
    </span>
  );
};

export default StyledSegmentText;