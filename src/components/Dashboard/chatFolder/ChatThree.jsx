import React, { useRef, useState } from "react";

const ChatThree =()=>{
    const chartRef = useRef(null);
    const [chartSize, setChartSize] = useState({width: 400, height :400});

    const increaseChartSize = ()=>{
        setChartSize({width: 600, height: 600});
    };
    const createOrUpdateChart =()=>{
        if (chartRef.current){
            const ctx = chartRef.current.getComtext('2d');
            new Chart(ctx, {
                type: "Line",
                data:{
                    labels: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
                    datasets:[{
                        data:[18,107,55,90,60,60,98],
                        backgroundColor: '#ffffff',
                        borderColor:'#ffffff',
                        pointBorderColor:'#ffffff',
                        pointBorderWidth:'2',
                        tension: 0.5
                    }]
                },
                options:{
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
                },
            });
        }
    };


    const handleOnEnded =()=>{
        increaseChartSize();
        createOrUpdateChart();
    }

    return(
        <>
            <div className="chartContainer">
                <canvas ref={chartRef} width={chartSize.width} height={chartSize.height}/>


            </div>
        
        
        </>
    )
}

export default ChatThree