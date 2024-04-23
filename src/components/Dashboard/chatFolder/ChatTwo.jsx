import React from "react";
import {Line} from  'react-chartjs-2';

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

        const data = {
            labels: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
            datasets:[{
                data:[18,107,55,90,60,60,98],
                backgroundColor: '#ffffff',
                borderColor:'#ffffff',
                pointBorderColor:'#ffffff',
                pointBorderWidth:'2',
                tension: 0.5
            }]
        };
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
            <div className="ChartDiv">
            <Line data={data} options={options}></Line>
            </div>
        
        </>
    )
}


export default ChartTwo