import React, { useState } from 'react';
import CoordinateSystem from './components/coordinate_system/coordinate_system';

function App() {
  const [numberOfPoints, setNumberOfPoints] = useState(0);

  return (
    <div className="App">
      <CoordinateSystem numberOfPoints={numberOfPoints} />
    </div>
  );
}

export default App;