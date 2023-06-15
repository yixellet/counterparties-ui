import React from 'react';
import './App.css';
import Map from '../map/Map';
import ControlPanel from '../controlPanel/ControlPanel';

function App() {
  return (
    <div className="App">
    <Map />
      <ControlPanel />
    </div>
  );
}

export default App;
