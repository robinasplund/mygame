import React from 'react';
import './../../Style/Component/GameSection/GameSection.css'

const GameSection = ({player1,player2}) => {

  return(
    <div className='GameSection'>

      <div className='PlayerSection'>

        <div className='PlayerInfo'>
           <div className='Name'>{player1.name}</div>
           <div className='Turn'>Spelarens tur</div>
        </div>
        <div className='PlayerInfo' style={{marginTop:'5vh'}}>
          <div className='Name'>{player2.name}</div>
          <div className='Turn'>Spelarens tur</div>
        </div>

        
      </div>

    </div>
  );
}
export default GameSection;