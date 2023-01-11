import React from 'react';
import './../../Style/Component/Map/Territory.css'


const Territory = () => {
  
    return(
      <div className='Territory'>
        
        This is a territory
      
      </div>
    );

}
export default Territory;

/*


 const[player1,setPlayer1] = useState({name:'markus', playersTurn:true, dice:'',armies:100});
    const[player2,setPlayer2] = useState({name:'robin', playersTurn:false, dice:'',armies:65});

    const[player,setPlayer]=useState(player1);

    function round(){
      let player1Dice = Math.floor((Math.random()*6)+1);
      let player2Dice = Math.floor((Math.random()*6)+1);
      let player1Armies = player1.armies - player2Dice;
      let player2Armies = player2.armies - player1Dice;
      setPlayer1({
        ...player1,
        armies:player1Armies
      });
      setPlayer2({
        ...player2,
        armies:player2Armies
      });
    }






 function rollDice(){
      let player1Dice = Math.floor((Math.random()*6)+1);
      let player2Dice = Math.floor((Math.random()*6)+1);
      setPlayer1({
        ...player1,
        dice:player1Dice
      });
      setPlayer2({
        ...player2,
        dice:player2Dice
      });
    }

    function fight(){      
      let player1Armies = player1.armies - player2.dice;
      setPlayer1({
        ...player1,
        armies:player1Armies
      });
      console.log(player1.armies);     
    }

    function round(){
      rollDice();
      fight();
    }

function fight(){
      let dice = Math.floor((Math.random()*6)+1);
      let health = player2.health - (player1.strength + dice);
      setPlayer2({
        ...player2,
        health:health
      });
      console.log(player2.health);
    }


function changePlayer(){
      if(player1.playersTurn===true){
        setPlayer(player1);
        setPlayer1({
          ...player1,
          playersTurn:false
        });
        setPlayer2({
          ...player2,
          playersTurn:true
        });
      }
      else if(player2.playersTurn===true){
        setPlayer(player2);
        setPlayer2({
          ...player2,
          playersTurn:false
        });
        setPlayer1({
          ...player1,
          playersTurn:true
        });
      }
    }

*/