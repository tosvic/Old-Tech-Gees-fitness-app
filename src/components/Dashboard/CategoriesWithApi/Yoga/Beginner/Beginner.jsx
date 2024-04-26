import React, {useState, useEffect } from "react";
import TopNav from "../../../navigations/top/TopNav";
import SideNav from "../../../navigations/side/SideNav";
import './Beginner.css';
import '../../../navigations/side/sidenav.css'
import '../../../navigations/top/topNav.css'
import { CiPlay1 } from "react-icons/ci";
import ModalOne from "./ModalOne";

const Beginner =()=>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setrError] = useState(null)

    const [showModal, setShowModal] = useState(false);

    const toggleModal =(id)=>{
        // setShowModal(id);
        setShowModal(!showModal);
    };


    useEffect(()=>{

            const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
            const options = {
            	method: 'GET',
            	headers: {
            		'X-RapidAPI-Key': 'ac2ebedabbmshba7a4419ae312e6p12ecaajsnc835ae13377e',
            		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            	}
            };

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
                console.log(jsonedData);
                setData(jsonedData);
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
        
        
        <div id='layout'>
            <div id='side-nav'>
                <SideNav />
            </div>
            <div id='display'>
                <TopNav />
                <div className="nonModal">
        
                {
                    data &&(
                        <div className="videoFeedsContainer">
                            {data?.map((item, i) =>{
                                if (i < 5){
                                return  <div className="item">
                                    
                                    <button className="playButton" onClick={()=>toggleModal((data[i].id))}> {CiPlay1} &times; </button>
                                    <ModalOne show={showModal} handleClose={()=>toggleModal((data[i].id))}/>
                                        <div className="bannerSection">
                                            <img src={data[i].gifUrl} alt="This is a giff"  className="giffs"/>
                                        </div>
                                            <div className="details">
                                                <h4>Name: {data[i].name}</h4>
                                                <h4>equipment:  {data[i].equipment}</h4>
                                                <h4>Instructions: {data[i].instructions}</h4>
                                            </div>
                                        </div>
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
export default Beginner 