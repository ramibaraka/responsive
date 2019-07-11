import React from 'react';
import logo from './logo.svg';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DayPicker/>
   
      </header>
    </div>
  );
}

export default App;
