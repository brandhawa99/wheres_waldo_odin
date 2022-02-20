import React from 'react';
import '../App.css'


const Header = (props)  =>{
    
    return(
        <div className='Header'>
            <h1>
                - Where's Waldo -
            </h1>
            <div className='pics'>
                <img style={ props.dogF ? { filter:'grayscale(100%)'} : {filter:""} }  src={props.dog} alt='dog'/>
                <img style={ props.guyF ? { filter:'grayscale(100%)'} : {filter:""} } src={props.guy} alt='guy' />
                <img style={ props.strawF ? { filter:'grayscale(100%)'} : {filter:""} } src={props.hat} alt='hat'/>
            </div>
        </div>
    )

}

export default Header;