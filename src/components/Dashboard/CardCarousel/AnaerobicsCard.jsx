import React from "react";
// import Slider from 'react-slick'
import Slider  from "react-slick";
import '../CardCarousel/CardStyle.css'

import { FaAngleDoubleRight } from "react-icons/fa";

const AnaerobicsCard =({cards})=>{
    const settings = {
        dots:true,
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

export default AnaerobicsCard;
