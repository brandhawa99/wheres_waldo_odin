
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

    if(props.xCord < 500){
        menu = {
            backgroundColor:'white',
            position: 'relative',
            width: '100px',
            height:'6rem' ,
            fontSize:'1rem',
            top:'-20px',
            left: "60px",
            listStyleType:'none'
        }

    }else{
        menu={
            backgroundColor:'white',
            position: 'relative',
            width: '100px',
            height:'6rem' ,
            fontSize:'1rem',
            top:'-20px',
            left: "-120px",
            listStyleType:'none'

        }
    }

    return (
        <div>
            <div onClick={props.click} style={stylesCircle}> 
                    <ul style={{listStyle:'none'},menu}>
                        <li>Straw Hat</li>
                        <li>Dog</li>
                        <li>Blue Shirt</li>
                    </ul>
            </div>

        </div>

    )

}

export default Circle 