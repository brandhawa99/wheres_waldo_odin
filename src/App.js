
import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header';
import Game from './components/Game'
import Circle from './components/Circle';
import WinScreen from './components/WinScreen'


import dogIMG from './img/dog.jpg'
import hatIMG from './img/guyInHat.jpg'
import guyIMG from './img/blackHatBlueshirt.jpg'

//firebase imports 
import {db} from './firebase'
import {collection, doc, getDocs} from'firebase/firestore';

function App() {
  /**
   * once you win
   */
  const [win, setWin] = useState(false);
  /**
   * Value of the actual click used to figure out where the circle is going to be placed
   */
  const [xActualClick, setXClick] = useState(0);
  const [yActualClick, setYClick] = useState(0);
  /**
   * Value of calculated click used to figure out where the page was clicked in relation to the picture
   */
  const[xCalculated,setXCalculated] = useState(0);
  const[yCalculated,setYCalculated] = useState(0);
  /**
   * manages state of circle
   * see if circle should be visible or not 
   */
  const [click, setClick] = useState(false);
  
  /**
   * coordinates, X , Y , name of each of the hidden characters 
   */
  const [straw, setStraw]  = useState({name:'straw', image: './img/guyInHat.jpg', x:215.5, y:833, found: false})
  const [dog,setDog] = useState({name:'dog',image: './img/dog.jpg',x: 229.5,y: 436,found:false})
  const [guy,setGuy] = useState({name:'guy',image: './img/dog.jpg',x: 327,y: 670,found:false})


  const getCordinatesOfClick = (e) =>{
    setClick(!click);
    let WINDOW_SIZE = window.innerWidth;
    let xCord = null;

    if(WINDOW_SIZE>600){
        xCord = Math.abs(e.pageX-((WINDOW_SIZE/2) - (300)))
    }else{
        xCord = e.pageX;
    }
    setXCalculated(xCord);

    setYCalculated(e.pageY);
    setXClick(e.pageX);
    setYClick(e.pageY)
}
const UpdateClick = () =>{
  setClick(!click);

}

/**
 * Sets all found values to false and sets win value to false
 */
const restartGame = () =>{
  setDog( prevState =>({
    ...prevState,
    found: false,
  }))

  setStraw( prevState =>({
    ...prevState,
    found: false,
  }))

  setGuy( prevState =>({
    ...prevState,
    found: false,
  }))
  setWin(false);

}

const checkGuess = (e) =>{
  let guess = e.target.value;
  UpdateClick();
  
  if(guess === 1){
      if(Math.abs(xCalculated-dog.x)<= 15 && Math.abs(yCalculated-dog.y) <=15){
          setDog( prevState =>({
              ...prevState,
              found: true,
            }))
          }else{
              return;
            }
  }
  
  if(guess === 2){
    if(Math.abs(xCalculated-guy.x)<= 15 && Math.abs(yCalculated-guy.y) <=15){
        setGuy( prevState =>({
            ...prevState,
        found :true
      }))
    }else{
      return;
    }
  }
  
  if(guess === 0){
      if(Math.abs(xCalculated-straw.x)<= 15 && Math.abs(yCalculated-straw.y) <=15){
          setStraw( prevState =>({
              ...prevState,
              found: true,
            }))
          }else{
              return;
            }
          }
  
  }

  useEffect(()=>{
    if(dog.found && straw.found && guy.found){
      setWin(true);
    }

  },[dog,straw,guy])

  const usersCollectionRef = collection(db,'users')
  useEffect(()=>{

    const getUsers = async() =>{
      const data = await getDocs(usersCollectionRef);
      const stuff = await (data.docs.map((doc)=>({...doc.data(),id: doc.id})));
      console.log(stuff);

    }
    getUsers();
  },[])
   
  return (
    <div className='container'>
      <Header dogF={dog.found} strawF={straw.found} guyF={guy.found} dog={dogIMG} guy={guyIMG} hat={hatIMG}/>
      
      <div className='main-container'>
        {click &&
          <Circle straw={straw} dog={dog} guy={guy} checkGuess={checkGuess} click={UpdateClick} xCord={xActualClick} yCord={yActualClick} />
        }
        {
          !win &&
          <Game click={getCordinatesOfClick}/>

        }
        {win &&
          <WinScreen restart={restartGame} />
        }
      </div>

    </div>
  );
}

export default App;
