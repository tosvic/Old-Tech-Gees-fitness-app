import React from "react";

import './Modal.css'


const  ModalOne =({ handleClose, show})=>{

    const showHideClassName = show ? 'modal display-block':'immodal display-none';

    

    return(
        <>
            <div className={showHideClassName}>
                <section className="">
                    {/* <button onClick={handleClose}>Close</button> */}
                    <iframe 
                    className="youtube"
                    width="160" 
                    height="85" 
                    src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    ></iframe>
                </section>
            </div>
        </>
    )
}

export default ModalOne