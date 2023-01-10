import './App.css';
import React,{ useState } from 'react';
import Gameboard from './Component/Gameboard/Gameboard';

function App() {

  
  return (
    <div className="App">

      <div className='PlayerStats'>       
        
      </div>

      <div className='Gameboard'>
        <Gameboard />
      </div>

      <div className='Rightfield'>
      
      </div>

      
      
    </div>
  );
}

export default App;
