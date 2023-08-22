import React from 'react';
import './CircleProgressBar.css'; // Import the CSS file
import { useCounter } from '../hooks/useCounter';

// The value which is used to compencate the delay on circle stroke transition
const transitionOffset = 1.9;

interface CircleProgressBarProps {
  size: number;
  duration: number;
  complete: () => void;
}

export const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ size, duration, complete }) => {
  const [counter, done] = useCounter({ ms: duration * 1000 });

  console.log(counter);

  if (done) {
    complete();
  }

  const progressStyle = {
    strokeDasharray: `${counter / 3.14 * transitionOffset}, 1000`,
  };

  return (
    <div className="flex items-center justify-center">
      <svg className={`progress-ring w-${size} h-${size}`} viewBox="0 0 24 24">
      <circle
          className="stroke-gray-700 opacity-25"
          strokeWidth="1.5"
          fill="transparent"
          r="9"
          cx="12"
          cy="12"
        />
        <circle
          className="progress-ring-circle stroke-gray-700"
          style={progressStyle}
          strokeWidth="1.5"
          strokeLinejoin='round'
          fill="transparent"
          r="9"
          cx="12"
          cy="12"
        />
      </svg>
    </div>
  );
};
