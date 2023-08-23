import { useEffect } from "react";
import moleHill from './molehill.png'

function EmptySlot(props){
    useEffect(() =>{
        let randomSeconds = Math.ceil(Math.random() * 5555)
        let timer = setTimeout(() =>{
            props.toggle(true)
        }, randomSeconds)
        return() => clearTimeout(timer)
    })

    return(
        <div>
            <img style={{'width' : '10vw'}} src={moleHill} alt={'mole hill'} />
        </div>
    )
}

export default EmptySlot