
import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Game from './components/Game'
import Circle from './components/Circle';

import dogIMG from './img/dog.jpg'
import hatIMG from './img/guyInHat.jpg'
import guyIMG from './img/blackHatBlueshirt.jpg'


function App() {

  const [xClick, setXClick] = useState(0);
  const [yClick, setYClick] = useState(0);
  const [click, setClick] = useState(false);
  const [straw, setStraw]  = useState({image: './img/guyInHat.jpg', x:215.5, y:833, found: false})
  const [dog,setDog] = useState({image: './img/dog.jpg',x: 229.5,y: 436,found:false})
  const [guy,setGuy] = useState({image: './img/dog.jpg',x: 229.5,y: 436,found:false})

  const addCircleOnClick = (x,y) =>{

  }

  const getCordinatesOfClick = (e) =>{
    setClick(!click);
    let WINDOW_SIZE = window.innerWidth;
    let xCord = null;
    let X_MATH = ''
    let Y_MATH = '';

    if(WINDOW_SIZE>600){
        X_MATH = Math.abs(e.pageX-((WINDOW_SIZE/2) - (300)))
    }else{
        X_MATH = e.pageX;
    }
    console.log('calculated X', X_MATH, e.pageY)
    setXClick(e.pageX);
    setYClick(e.pageY)
    // console.log("  ");
    // console.log('xCord:', xCord, 'yCord:', e.pageY )
}
const UpdateClick = () =>{
  setClick(!click);

}

useEffect(()=>{
  console.log('CLICKED: X',xClick,"y",yClick)

},[xClick,yClick])

  return (
    <div className='container'>
      <Header dog={dogIMG} guy={guyIMG} hat={hatIMG}/>
      
      <div className='main-container'>
        {click &&
          <Circle click={UpdateClick} xCord={xClick} yCord={yClick} />
        }
        <Game click={getCordinatesOfClick}/>
      </div>

    </div>
  );
}

export default App;
