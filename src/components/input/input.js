import React, { useState } from 'react';
import './input.css';

const PositiveNumberButton = ({ onNumberSubmit, onReset }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleButtonClick = () => {
    const number = parseFloat(inputValue);

    if (isNaN(number) || number <= 0 || number >= 20000) {
      setErrorMessage('Please enter a positive number less than 20,000.');
    } else {
      onNumberSubmit(number);
    }
  };

  const handleReset = () => {
    setInputValue('');
    setErrorMessage('');
    onReset();
  };

  return (
    <div className='input-btn'>
      <label>Enter a positive number:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Positive number"
        />
      </label>
      <button onClick={handleButtonClick} className="set-btn">Submit</button>
      <button onClick={handleReset} className='reset-btn'>Reset</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default PositiveNumberButton;