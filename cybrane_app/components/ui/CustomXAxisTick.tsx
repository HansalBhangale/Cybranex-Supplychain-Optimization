import React from 'react';

interface CustomXAxisTickProps {
  x?: number;
  y?: number;
  payload?: { value: string };
}

export const CustomXAxisTick: React.FC<CustomXAxisTickProps> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-90)"
        style={{ fontSize: 10 }}
      >
        {payload?.value}
      </text>
    </g>
  );
};

