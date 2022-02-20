
import React from 'react'
import '../App.css'

const WinScreen = props =>{

    return(
        <div className='win-container'>
            <h1>You Win</h1>
            <p>Your Time Was: </p>
            <span> 50 seconds</span>
            <button onClick={props.restart}>Restart</button>
        </div>


    )


}

export default WinScreen;