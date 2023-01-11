import React,{useState} from 'react';
import './../Style/Container/Game.css'
import GameSection from './../Component/GameSection/GameSection.js'
import Map from './../Component/Map/Map.js';


const Game = () => {

  const[player1,setPlayer1] = useState({name:'Anna',armies:100});
  const[player2,setPlayer2] = useState({name:'Pelle',armies:100});

  return(
    <div className='Game'>
      <GameSection 
        player1={player1}
        player2={player2}
      />
      <Map />
    </div>
  );
}
export default Game;

