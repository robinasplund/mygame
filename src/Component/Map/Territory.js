import React from 'react';
import './../../Style/Component/Map/Territory.css'

const Territory = ({IncreaseArmies,DecreaseArmies,name,armies}) => {
 
    return(
      <div 
        className='Territory'
      >
        <div className='Name'>
          {name}
        </div>
        <div className='Armies'>
          <div className='Decrease' onClick={()=>DecreaseArmies({name})}>X</div>
          <div className='Amount'>{armies}</div>
          <div className='Increase' onClick={()=>IncreaseArmies({name})}>X</div>
        </div>
      
      </div>
    );

}
export default Territory;

