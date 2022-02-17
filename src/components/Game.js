
import themePark from './img/themePark.jpg'

// 600x796


const Game  = props =>{
    return(
        <div className='game'> 
            <img onClick={props.click} src={themePark} alt='theme park' />
        </div>
    )

}

export default Game;