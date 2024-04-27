import React, { useEffect, useState } from "react";
import {Line} from  'react-chartjs-2';

import '../DailyWorkOut/DailExcercise.css';
import HamstringWprkout from '../DailyWorkOut/videos/HamstringWprkout.mp4';
import ladyWorkOut from '../DailyWorkOut/images/ladyWorkOut.jpg';
import { CiPlay1 } from "react-icons/ci";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement 
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const ChartTwo = ()=>{
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

    const [data, setData] = useState( {
        labels: ['Sun','Mon','Tues','Wed','Thurs','Fri'],
        datasets:[{
            data:[18,107,55,90,60,60],
            backgroundColor: '#ffffff',
            borderColor:'#ffffff',
            pointBorderColor:'#ffffff',
            pointBorderWidth:'2',
            tension: 0.5
        }]
    })

    const updateChatHandler =()=>{
        setData({
            labels: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
            datasets:[{
                data:[18,107,55,90,60,60,100],
                backgroundColor: '#ffffff',
                borderColor:'#ffffff',
                pointBorderColor:'#ffffff',
                pointBorderWidth:'2',
                tension: 0.5
            }]
        })
    }
    const HandleChatDataUpdate =()=>{
        updateChatHandler();
    }


    // const data = {
    //     labels: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
    //     datasets:[{
    //         data:[18,107,55,90,60,60,98],
    //         backgroundColor: '#ffffff',
    //         borderColor:'#ffffff',
    //         pointBorderColor:'#ffffff',
    //         pointBorderWidth:'2',
    //         tension: 0.5
    //     }]
    // };
    const options ={
        plugins:{
            legend: false
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:10,
                max:200,
                ticks: {
                    stepSize: 0,
                    callback: (value) => value + 'mins'
                },
                grid: {
                    borderDash:[10]
                }
            }
        }
    };
    return(
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
                                <video controls autoPlay className="dayOneWorkOut" onEnded={HandleChatDataUpdate}>
                                    {/* <source src={QuickWarmUp}  className="videoFraming"/> */}
                                    <source src={HamstringWprkout}  className="videoFraming"/>
                                    {/* <source src={DayOneWorkOut}  className="videoFraming"/> */}
                                </video>
                                </div>
                        </div>
                    </div> 
                        
                }
            </div>
            <div className="ChartDiv">
            <Line data={data} options={options}></Line>
            <button onClick={HandleChatDataUpdate}>Update Graph</button>
            </div>
        
        </>
    )
}


export default ChartTwo