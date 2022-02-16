import React, { useRef } from 'react';

import themePark from './img/themePark.jpg'

// 600x796


const Game  = prpos =>{
    const image = useRef();
    
    const getCordinates = (e) =>{
        let WINDOW_SIZE = window.innerWidth;
        let imgWidth = image.current.clientWidth;
        let xCord = null;

        console.log('x:', e.pageX , 'y:',e.pageY, 'current Corrdinates');
        // console.log(window.innerWidth/2 , 'inner Width');
        // console.log('Client Width:', image.current.clientWidth/2)

        if(WINDOW_SIZE>600){
            xCord = Math.abs(e.pageX-((WINDOW_SIZE/2) - (imgWidth/2)))
        }else{
            xCord = e.pageX;
        }



        console.log('ActualSpot x coord:', xCord )
        console.log('ActualSpot y coord:', e.pageY )
        console.log("  ");

    }


    return(
        <div className='game'> 
            <img ref={image} onClick={getCordinates} src={themePark} alt='theme park' />
        </div>
    )

}

export default Game;