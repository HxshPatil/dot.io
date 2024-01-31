import React, { useState, useEffect } from 'react';

const RandomPoints = ({ numberOfPoints, width, height, axisColor, pointSize }) => {
  const generateRandomPoints = () => {
    const points = [];
    for (let i = 0; i < numberOfPoints; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      points.push({ x, y });
    }
    return points;
  };

  const [points, setPoints] = useState([]);

  useEffect(() => {
    setPoints(generateRandomPoints());
  }, [numberOfPoints]);

  return (
    <svg width={width} height={height}>
      <rect x={width / 2 - 200} y={height / 2 - 200} width={400} height={400} fill="none" stroke={axisColor} strokeWidth={2} />

      {points.map(({ x, y }, index) => {
        const rad = Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2));
        return (
          <circle className='dot'
            key={index}
            cx={x}
            cy={y}
            r={pointSize}
            style={{
                animationDelay: `${index * 0.1}s`,
            }}
            fill={rad < 200 ? 'red' : 'blue'}
          />
        );
      })}
    </svg>
  );
};

export default RandomPoints;