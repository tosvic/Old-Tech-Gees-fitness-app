import React, {useState, useEffect } from "react";
import TopNav from "../../../navigations/top/TopNav";
import SideNav from "../../../navigations/side/SideNav";
import './Beginner.css';
import '../../../navigations/side/sidenav.css'
import { Link } from "react-router-dom";
import '../../../navigations/top/topNav.css'
import { CiPlay1 } from "react-icons/ci";
import ModalOne from "./ModalOne";

const AerobicBeginner =()=>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setrError] = useState(null)
    const [show, setShow] = useState([]);

    const toggleModal =(i)=>{
        
        const temp = []
        for (let index = 0; index < data.length; index++) {
            if(index == i) temp.push(!show[i])
            else temp.push(show[i])
        }
        setShow(temp)
        console.log(temp)
    };

    
    

    useEffect(()=>{

        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '94bccb77d9mshe3c1aba4534eecbp1874adjsn5f832ba3fcd4',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        

            // const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
            // const options = {
            // 	method: 'GET',
            // 	headers: {
            // 		'X-RapidAPI-Key': 'ac2ebedabbmshba7a4419ae312e6p12ecaajsnc835ae13377e',
            // 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            // 	}
            // };

            // try {
            // 	const response = await fetch(url, options);
            // 	const result = await response.text();
            // 	console.log(result);
            // } catch (error) {
            // 	console.error(error);
            // }


        const fetchData = async ()=>{

            try{
                const response = await fetch(url, options);
                if(!response.ok){
                    throw new Error ("Error 404: Resource not found");
                }
                const jsonedData = await response.json();
                // console.log(jsonedData);
                setData(jsonedData);
                    const temp = [true]
                    for (let index = 1; index < jsonedData.length; index++) {
                        temp.push(false)
                    } 
                    setShow(temp)
                setIsLoading(false);
            } catch(error){
                setrError(error);
                setIsLoading(false);
            }
        };


        fetchData();
        
        // console.log(fetchData())
    }, []);
    if (isLoading){
        return <div> Loading resource .....</div>
    }  
    if (error){
        return <div> error.message </div>
    }  

    return(
        <>
        
        
        <div >
            
            <div>
                <div className="nonModal">
        
                {
                    data &&(
                        <div className="videoFeedsContainer">
                            {data?.map((item, index) =>{
                                if (index < 5){
                                return(  
                                <div className="item" key={item.id}>
                                    
                                    {/* <button className="playButton" onClick={()=>toggleModal(index)}> {CiPlay1} &times; </button>
                                    <ModalOne show={show[index]}/> */}
                                    <div className="bannerSection">
                                        <img src={data[index].gifUrl} alt="This is a giff"  className="giffs"/>
                                    </div>
                                    <div className="details">
                                        <h4>Name: {data[index].name}</h4>
                                        <h4>equipment:  {data[index].equipment}</h4>
                                        <h4>Instructions: {data[index].instructions[0]}</h4>
                                        {
                                            index === 0 ? <Link to={'MainLayout/Aerobics/Beginner/GymRoom/RoomOne'} smooth={true} > 
                                            view all ....
                                         </Link>
                                            :(index === 1? <Link to={'MainLayout/Aerobics/Beginner/GymRoom/RoomTwo'} smooth={true} > 
                                                                view all ....
                                                            </Link>
                                            :  (index === 2 ? <Link to={'MainLayout/Aerobics/Beginner/GymRoom/RoomThree'} smooth={true} > 
                                                                    view all ....
                                                                </Link>  
                                            :  (index === 2 ? <Link to={'MainLayout/Aerobics/Beginner/GymRoom/RoomFour'} smooth={true} > 
                                                                    view all ....
                                                                </Link>
                                            :  (index === 2 ? <Link to={'MainLayout/Aerobics/Beginner/GymRoom/RoomFive'} smooth={true} > 
                                                                    view all ....
                                                                </Link>: null))))
                                        }
                                    </div>
                                </div>
                                )
                                } else{
                                    return <></>
                                }
                            }
                            )}
                        </div >
                    )
                }
                </div>
            </div>
        </div>
        
        </>
    )

}
export default AerobicBeginner