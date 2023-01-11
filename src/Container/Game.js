import React from 'react';
import './../Style/Container/Game.css'
import GameSection from './../Component/GameSection/GameSection.js'
import Map from './../Component/Map/Map.js';


const Game = () => {



  return(
    <div className='Game'>
      <GameSection />
      <Map />
    </div>
  );
}
export default Game;

/*
  const[player1,setPlayer1] = useState({name:'Anna',armies:100});
  const[player2,setPlayer2] = useState({name:'Pelle',armies:100});
*/