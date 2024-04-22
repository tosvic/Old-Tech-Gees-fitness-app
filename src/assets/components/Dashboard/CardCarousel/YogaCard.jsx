import React from "react";
import Slider from 'react-slick'
import './Card.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaAngleDoubleRight } from "react-icons/fa";

const YogaCard =({cards})=>{
    const settings = {
        dots:true,
        // customPaging: function (i){
        //     return(
        //         <span
        //         className = {`custom-dot-${i}`}
        //         style={{
        //             backgroundColor: i === currentSlide ? red:  white,
        //         }}></span>
        //     );
        // },
        infinite: true,
        speed: 500,
        slidesTosShow: 3,
        slidesToScroll:1
    }

    
    return(
        <>
            <div className="card-slider-container">
                <Slider {...settings}>
                    {cards.map((card, index) => (
                    <div className="CardContainer">
                        <div key={index} className="card overlay" style={{
                            backgroundImage: `url(${card.image})`,
                            backgroundColor: `${card.backgroundColor}`
                        }}>
                            <div className="detailsection" key={index}>
                                <h2>{card.title}</h2>
                                <p> {card.trainerName}</p>
                                <h6>content 1</h6>

                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
                <h6 className="viewAll">View all <FaAngleDoubleRight/> </h6>
            </div>
        
        
        </>
    )
}

export default YogaCard;
