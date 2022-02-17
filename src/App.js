
import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Game from './components/Game'
import dog from '../src/components/img/dog.jpg'
import hat from '../src/components/img/guyInHat.jpg'
import guy from '../src/components/img/blackHatBlueshirt.jpg'


function App() {

  const [bottomA, setBottomA]  = useState([
    {
      name: 'cowboy hat',
      x:215.5, 
      y:833, 
      found: false
    }
  ])

  const getCordinatesOfClick = (e) =>{
    let WINDOW_SIZE = window.innerWidth;
    let xCord = null;

    if(WINDOW_SIZE>600){
        xCord = Math.abs(e.pageX-((WINDOW_SIZE/2) - (300)))
    }else{
        xCord = e.pageX;
    }
    console.log('xCord:', xCord, 'yCord:', e.pageY )
    console.log("  ");
}

  return (
    <div className='container'>
      <Header dog={dog} guy={guy} hat={hat}/>
      <div className='main-container'>
        <Game click={getCordinatesOfClick}/>
      </div>

    </div>
  );
}

export default App;
