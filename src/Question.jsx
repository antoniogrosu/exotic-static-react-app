import { useState } from "react"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Question(props){
    const [response , setResponse] = useState(false)
    function toggleResponse(){
        setResponse(prev => !prev)
    }

    return (    
        <AnimationOnScroll animateIn="animate__fadeInLeft" duration={0.5}>
        <div className="question" onClick={toggleResponse}>
            <h3 className="small-heading black">{props.question}</h3>
            { response && <p className="text black">{props.response}</p>}
        </div>
        </AnimationOnScroll>
    )

}