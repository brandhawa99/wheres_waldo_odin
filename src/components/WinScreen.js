
import React, { useEffect, useState } from 'react'
import '../App.css'
import{collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'

const WinScreen = props =>{
    const [added, setAdded] = useState(false);
    const[playerData, setPlayerData] = useState({});

    const showScore = () =>{
        setAdded(true);
    }

    useEffect(()=>{
        getUsers();
        console.log(playerData)


    },[added])

    const getUsers = async() =>{
        const data = await getDocs(collection(db,'users'));
        const stuff = await (data.docs.map((doc)=>({...doc.data(),id: doc.id})));
        setPlayerData(stuff);
  
      }
    const doThis = () =>{
        props.addUser();
        showScore();

    }


    return(
        <div className='win-container'>
            {!added &&
            <div> 
                <h1>You Win</h1>
                <p>Your Time Was: </p>
                <span>{props.time} seconds </span>
                <input maxLength={45} onChange={props.name} placeholder='Name...'  />
                {/* <button onClick={props.restart}>Restart</button> */}
                <button onClick={doThis}>Add Your Score</button> 
            </div>
        }
        {added && 
            <div> 
                <h1>Scores: </h1>
                    <div> 
                        <span> {props.playerName}:{props.time} seconds</span>
                    </div>
                {playerData.map((player)=>{
                    return(
                        <div id={player.id}> 
                            <span>{player.name}:  {player.difference} seconds </span>
                        </div>
                    )
                })}

            </div>
        }
        </div>


    )


}

export default WinScreen;