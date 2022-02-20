
import React from 'react';
import '../App.css'


const Circle = props =>{

    const stylesCircle = {
        border : 'solid 5px black',
        position: 'absolute',
        width: '50px',
        height: '50px',
        borderRadius: "50%",
        left: `${props.xCord-25}px`,
        top: `${props.yCord-25}px`
    }
    let menu = null;

    if(props.xCord < window.innerWidth/2){
        menu = {
            backgroundColor:'white',
            position: 'absolute',
            width: '100px',
            height:'6rem' ,
            fontSize:'1rem',
            left: `${props.xCord+40}px`,
            top: `${props.yCord-30}px`,
            listStyleType:'none'
        }

    }else{
        menu={
            backgroundColor:'white',
            position: 'absolute',
            width: '100px',
            height:'6rem' ,
            fontSize:'1rem',
            left: `${props.xCord-130}px`,
            top: `${props.yCord-30}px`,
            listStyleType:'none'

        }
    }

    return (
        <div>
            <div onClick={props.click} style={stylesCircle}> 
            </div>
            <ul style={{listStyle:'none'},menu}>
                <li style={props.straw.found ? { backgroundColor:'#7AFF33 '} : {backgroundColor : 'white'}}  value={0} onClick={props.checkGuess}>Straw Hat</li>
                <li style={props.dog.found ? { backgroundColor:'#7AFF33 '} : {backgroundColor : 'white'}} value={1} onClick={props.checkGuess}>Dog</li>
                <li style={props.guy.found ? { backgroundColor:'#7AFF33 '} : {backgroundColor : 'white'}} value={2}onClick={props.checkGuess}>Blue Shirt</li>
            </ul>

        </div>

    )

}

export default Circle 