import React, { useState } from "react";  
import skillLevel from './images/skillLevel.png'
import '../Categories/Categories.css'
import { Link } from "react-router-dom";
const Categories = ()=>{

        const [ selectedList, setSelectedList] = useState(null);

        const YogaLevel = ['Beginner', 'Intermediate', 'Advanced']
        const AerobicsLevel = ['Beginner', 'Intermediate', 'Advanced']
        const AnaerobicsLevel = ['Beginner', 'Intermediate', 'Advanced']

        const ListClickHAndler =(ListId)=>{
            setSelectedList(ListId);
        }
   
        // const LinkHandler =  ()=>{
        //     if(i ===  1){
        //         return <Link to={'/MainLayout/Yoga/Beginner'} smooth={true} > {item} </Link>
        //     }else if(i ===  2){
        //         return <Link to={'/MainLayout/Yoga/Intermediate'} smooth={true} > {item} </Link>
        //     }else if(i ===  2){
        //         return <Link to={'/MainLayout/Yoga/Advance'} smooth={true} > {item} </Link>
        //     }
        // }
    return(
        <>
            <div className="subnavTitles" style={{ backgroundImage: {skillLevel}}}>
                <div className="TitlesnList">
                    <p id='subnavlinks' className= {selectedList ===1 ? 'active': ''}  
                    onClick={() => ListClickHAndler(1)}> Yoga</p>
                    <div className="displayList">
                        {
                            selectedList === 1 &&(
                                <ul className="lists">
                                    {YogaLevel.map((item, i)=>(
                                        <li key={i} className="list">
                                            <Link to={'MainLayout/Beginner'} smooth={true} > {item} </Link>
                                            {/* {  ()=>LinkHandler(i)} */}
                                        </li>
                                    ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
               
               <div className="TitlesnList">
                <p id='subnavlinks' className= {selectedList ===2 ? 'active': ''}  
                    onClick={() => ListClickHAndler(2)}>Aerobics</p>
                    {
                        selectedList === 2 &&(
                            <ul className="lists">
                                {AerobicsLevel.map((item, i)=>(
                                    <li key={i} className="list">{item}</li>
                                ))
                                }
                            </ul>
                        )
                    }
               </div>
               <div className="TitlesnList">
                <p id='subnavlinks' className= {selectedList ===3 ? 'active': ''} 
                    onClick={() => ListClickHAndler(3)}>Anaerobics</p>
                    {
                        selectedList === 3 &&(
                            <ul className="lists">
                                {AnaerobicsLevel.map((item, i)=>(
                                    <li key={i} className="list">{item}</li>
                                ))
                                }
                            </ul>
                        )
                    }
               </div>
          

               
                    
                   
            </div>
            
            {/* <div class="subnavContents activeContent" id="skills"> 
                <ul>
                    <li><span>Software Development</span> <br/> Developing solution-specific Desktop and Web Applications </li>
                    <li><span>Cloud Computing</span> <br/> Developing cloud-based Web and API applications </li>
                </ul>
            </div>
            <div class="subnavContents" id="experience"> 
            <ul>
                <li><span>Software Development</span> <br/> Developing solution-specific Desktop and Web Applications </li>
                <li><span>Cloud Computing</span> <br/> Developing cloud-based Web and API applications </li>
                <li><span>Software Development</span> <br/> Developing solution-specific Desktop and Web Applications </li>
                <li><span>Cloud Computing</span> <br/> Developing cloud-based Web and API applications </li>
            </ul>
            </div>
            <div class="subnavContents" id="education"> 
                <ul>
                    <li><span>Software Development</span> <br/> Developing solution-specific Desktop and Web Applications </li>
                    <li><span>Cloud Computing</span> <br/> Developing cloud-based Web and API applications </li>
                    <li><span>Software Development</span> <br/> Developing solution-specific Desktop and Web Applications </li>
                    <li><span>Cloud Computing</span> <br/> Developing cloud-based Web and API applications </li>
                    <li><span>Software Development</span> <br/> Developing solution-specific Desktop and Web Applications </li>
                    <li><span>Cloud Computing</span> <br/> Developing cloud-based Web and API applications </li>
                </ul>
            </div> */}
        
        </>
    )



}
export default Categories