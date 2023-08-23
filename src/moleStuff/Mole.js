//make a mole appear in a hole
import { useEffect } from "react";
import moleImg from './mole.png'

function Mole(props){
    useEffect(() =>{
        let randomSeconds = Math.ceil(Math.random() * 5555)
        let timer = setTimeout(() =>{
            props.toggle(false)
        }, randomSeconds)
        return ()=> clearTimeout(timer)
    })

    return(
        <div>
            <img style={{'width': '10vw'}}
            src={moleImg}
            onClick={props.handleClick}
            alt={'mole'} />
        </div>
    )
}

export default Mole