import { useEffect, useRef } from "react";

export const ProgressCircle = ({ progress, size = 18 }) => {
  const ring = useRef();

  useEffect(() => {
    if (!ring.current) return;

    const circle = ring.current;
    const length = circle.getTotalLength();

    circle.style.strokeDasharray = length;
    circle.style.strokeDashoffset =
      length * Math.min(Math.max(1 - progress / 100, 0), 1);
  });

  const radius = size / 2;
  const strokeWidth = radius / 2.61;

  return (
    <svg viewBox="0 0 18 18" width={size} height={size}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        strokeWidth={strokeWidth}
        stroke="rgba(36, 162, 41, 0.16)"
      />
      <circle
        ref={ring}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        strokeWidth={strokeWidth}
        stroke="#24A229"
        transform={`rotate(-90, ${radius}, ${radius})`}
      />
    </svg>
  );
};

export default ProgressCircle;
