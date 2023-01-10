import React,{useState} from 'react';
import '../../Style/Gameboard/Gameboard.css';
import Territory from './Territory';

const Gameboard = () => {
  
  return(
    <>
      <div className='Gameboard'>

        <div className='GameboardRow'>
          <Territory />
          <Territory />
          <Territory />
          <Territory />
          <Territory />
        </div>
        <div className='GameboardRow'>
          <Territory />
          <Territory />
          <Territory />
          <Territory />
          <Territory />
        </div>
        

      </div>  
    </>
  );
}
export default Gameboard;