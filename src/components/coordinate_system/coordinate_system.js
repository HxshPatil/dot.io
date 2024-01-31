import React, { useState } from 'react';
import PositiveNumberButton from '../input/input';
import RandomPoints from '../random_num_gen/random';
import './coordinate_system.css';

const CoordinateSystem = () => {
  const width = 400;
  const height = 400;
  const axisColor = '#333';
  const pointSize = 2;

  const [numberOfPoints, setNumberOfPoints] = useState(0);

  const handleNumberSubmit = (number) => {
    setNumberOfPoints(number);
  };

  const handleReset = () => {
    setNumberOfPoints(0);
  };

  return (
    <div className='wrapper'>
      <PositiveNumberButton onNumberSubmit={handleNumberSubmit} onReset={handleReset} />
      <RandomPoints width={width} height={height} axisColor={axisColor} pointSize={pointSize} numberOfPoints={numberOfPoints} />
    </div>
  );
};

export default CoordinateSystem;