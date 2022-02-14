import React from 'react';

import themePark from './img/themePark.jpg'


const Game  = prpos =>{

    const getCordinates = (e) =>{
        console.log(e.pageX , e.pageY , "CURRENT CORRDINATES");
    }


    return(
        <div className='game'> 
            <img onClick={getCordinates} src={themePark} alt='theme park' />
        </div>
    )

}

export default Game;