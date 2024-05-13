import React, { useEffect, useState } from "react";
import './TextSlider.css'

const TextSlider =({Texts, Interval= 2000})=>{
    const activeSlider = (i === index) ? 'textSlide active' : 'text-Slide'
    const [ indexedDB, setIndex] = useState(0);
    
    useEffect(()=>{
        const IntervalId = setInterval(()=>{
            setIndex((prevIndex) => (prevIndex + 1) % Texts.length);
        },Interval);
        return ()=> clearInterval(IntervalId);
    }, [Texts, Interval]);

    return(
        <>
            <div className="textSlider">
                {
                    Texts.map((text, i)=>(
                        <div key={i} className={activeSlider}>
                            {text}
                        </div>   
                    ))
                }
            </div>
        
        </>
    )
}

export default TextSlider