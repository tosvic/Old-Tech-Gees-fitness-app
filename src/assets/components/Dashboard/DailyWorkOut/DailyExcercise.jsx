import React, { useEffect, useState } from "react";
import '../DailyWorkOut/DailExcercise.css'
import QuickWarmUp from './videos/QuickWarmUp.mp4'
import DayOneWorkOut from './videos/DayOneWorkOut.mp4'
import HamstringWprkout from './videos/HamstringWprkout.mp4'
import ladyWorkOut from './images/ladyWorkOut.jpg'
import { CiPlay1 } from "react-icons/ci";


const DailyExcercise = ()=>{
    const cuurrentDate  = new Date().toLocaleDateString();

    const [loaded, setLoaded] =useState(false); 
    const [showVideo, setShowVideo] = useState(true );

    const toggleVideoHandler =() =>{
        setShowVideo(!showVideo);
    }
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setLoaded(true);
        }, 1000);
        return () => clearTimeout(timeOut)
    }, []);

    return (
        <>
            <div className="videoStateMgt">
                {
                    showVideo ?
                        <div className="dailyWorkoutContainer">
                                <div className="Title">
                                <h3 className="hero"> Today's Workout Plan </h3>
                                <h4 className="CurrentDate"> {cuurrentDate} </h4>
                            </div>
                            <div className="DailyWorkoutbanner">
                                    <img src={ladyWorkOut} alt="Picture of lady squarting" className="imageBanner" />
                                <div className="tests">
                                    <h3 className="dayOne"> Day 1 - Warm up</h3>
                                    <h4 className="time"> | 07:00AM - 08:00AM </h4>
                                    <button className="playvideo" onClick={toggleVideoHandler}> <CiPlay1/></button>
                                </div>
                            </div>
                        </div> : 
                        <div className="dailyWorkoutContainer">
                            <div className="Title">
                                <h3 className="hero"> Today's Workout Plan </h3>
                                <h4 className="CurrentDate"> {cuurrentDate} </h4>
                            </div>
                            <div className="DailyWorkoutbanner">
                                 <div className="videoContainer">
                                    <video controls autoPlay className="dayOneWorkOut">
                                        {/* <source src={QuickWarmUp}  className="videoFraming"/> */}
                                        <source src={HamstringWprkout}  className="videoFraming"/>
                                        {/* <source src={DayOneWorkOut}  className="videoFraming"/> */}
                                    </video>
                                 </div>
                            </div>
                        </div> 
                        
                    }
            </div>
            
        </>
    )
}


export default DailyExcercise