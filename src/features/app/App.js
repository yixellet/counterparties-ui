import React from 'react';
import './App.css';
import Map from '../map/Map';
import ControlPanel from '../controlPanel/ControlPanel';
import LoginButton from '../loginButton/LoginButton';

function App() {
  return (
    <div className="App">
    <Map />
    <ControlPanel />
    <LoginButton />
    </div>
  );
}

export default App;
