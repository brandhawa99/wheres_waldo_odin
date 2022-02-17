import React from 'react';
import '../App.css'


const Header = (props)  =>{
    
    return(
        <div className='Header'>
            <h1>
                - Where's Waldo -
            </h1>
            <div className='pics'>
                <img src={props.dog} alt='dog'/>
                <img src={props.guy} alt='guy' />
                <img src={props.hat} alt='hat'/>
            </div>
        </div>
    )

}

export default Header;