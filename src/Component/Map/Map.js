import React from 'react';
import './../../Style/Component/Map/Map.css';
import Territory from './Territory';

const Map = ({IncreaseArmies,DecreaseArmies,territories}) => {

  return(
    <>
      <div className='Map'>

        <div className='TerritoryRow'>

          {territories.map((item, index) => (
            <Territory 
              key={index} 
              name={item.name} 
              armies={item.armies} 
              IncreaseArmies={IncreaseArmies}
              DecreaseArmies={DecreaseArmies}
            />
         
          ))}
          
        </div>
        

      </div>  
    </>
  );
}
export default Map;

/*

          {territories.map((item, index) => (
            <div key={index}>
              <div>Name: {item.name}</div>
              <div>territories: {item.territories}</div>
            </div>
          ))}

  <div className='TerritoryRow'>
          <Territory round={round}/>
          <Territory round={round}/>
          <Territory round={round}/>
          <Territory round={round}/>
          <Territory round={round}/>
        </div>




*/