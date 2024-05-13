import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";


import { MdFitnessCenter } from 'react-icons/md';

function Banner() {

    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-squart',
            delay: 0,
            duration: 2000
        })

    });


    return (
        <>
            <div id="Home" className='main-font h-full bg-[url(./assets/img/04.jpg)] bg-white bg-no-repeat bg-bottom bg-contain lg:px-52 px-10 lg:py-20 max-sm:pt-20 md:pt-20 gap-5 flex lg:flex-col flex-col justify-between'>

                <div className='h-full lg:py-40 flex-col justify-center lg:items-start items-center text-black mt-14'>
                    <h1 data-aos='fade-right' className='text-[3.7rem] font-bold mb-4 leading-normal'>Your HEALTH is <br /> <span className='text-button font-extrabold'>VITAL</span> to us  </h1>

                    <p data-aos='fade-left'
                        className='text-white max-w-screen-lg text-xl lg:text-justify'> ...One stop shop for healthy living </p>
                </div>

                <div data-aos='fade-left' className="max-sm:mt-20 flex mb-10">
                    <a onClick={()=>navigate('/Splash')}
                        href="#"
                        className="rounded-md bg-white px-6 py-4 text-mD font-semibold text-black shadow-sm hover:bg-button hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button">
                        Start Now
                    </a>
                </div>
            </div>

            {/* 2ND SECTION WRITE UP */}
            <div data-aos='fade-right' className="h-80 text-center flex flex-col items-center justify-center max-sm:my-14 ">
                <h1 data-aos='fade-left' className="text-3xl font-extrabold tracking-tight text-button sm:text-4xl px-5">
                    The Vitality App
                </h1>
                <p className="mt-6 text-lg leading-8 text-black max-w-2xl">
                  The Vitality App will serve as a personalized platform facilitating users in improving their <br/>
                  physical health through tailored fitness routines, exercise types, and various forms of wellness activities.
                </p>
            </div>


            {/* 3RD SECTION -BASIC FEATURES */}

            <div id="Home" className='main-font max-md:flex-col-reverse h-screen bg-[url(./assets/img/img3.jpg)] bg-cover bg-bottom bg-no-repeat lg:px-20 px-10 lg:py-0 max-sm:pt-20 md:pt-20 gap-20 flex lg:flex-row flex-row justify-between  items-center'>

                <div data-aos='fade-up' src="" className='bg-[url(./assets/img/3.jpg)] h-80 w-96 bg-no-repeat bg-contain bg-center p-1 py-0 max-sm:mt-8' alt="" />


                <div className='h-full lg:py-20 flex-col justify-center lg:items-start items-center text-white'>
                    <h1 data-aos='fade-right' className='text-[3rem] font-bold mb-2 leading-normal text-button'>Your Fitness Corner</h1>
                    <p data-aos='fade-left' className='text-text-color text-[.9rem] max-w-screen-lg'>We offer these excercise types</p>

                    <div data-aos="fade-up"
                        data-aos-duration="2000" className="ml-10 p-0">

                        <p className="text-text-color max-w-screen-lg text-xl pt-5 ml-1">
                            <li >Aerobic</li>
                            <li className='mt-2 '>Cardio</li>
                            <li className='mt-2'>Dieting</li>
                            <li className='mt-2'>Yoga</li>
                            <li className='mt-2'>Pilates</li>
                            <li className='mt-2'>Gymnastics</li>
                            <li className='mt-2'>Special Trainer</li>

                        </p>
                    </div>

                </div>
            </div>


            {/* 4TH SECTION */}
            <div id="About" className='main-font  lg:px-60 px-10 lg:py-0 max-sm:pt-20 md:pt-20 gap-5 flex lg:flex-col flex-col justify-between  items-center'>

                <div className='h-full lg:py-40 flx flex-col justify-center lg:items-start items-center'>
                    <h5 data-aos='fade-right' className='text-[3em] font-extrabold tracking-[.2rem]'>ARE YOU READY TO GET <br /> FIT AND IN SHAPE</h5>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10 mt-20 p-0 max-md:my-20 text-center ">
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-white bg-black rounded-3xl h-36 w-44 border-2 border-button b_glow"><MdFitnessCenter className='text-[20px] mb-2' /> Personalized Wellness Assessment</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-white bg-black rounded-3xl h-36 w-44 border-2 border-button b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Customized <br /> Plans</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-white bg-black rounded-3xl h-36 w-44 border-2 border-button b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Rewarding <br />Features</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-white bg-black rounded-3xl h-36 w-44 border-2 border-button b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Personalised Workout <br /> Activites</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-white bg-black rounded-3xl h-36 w-44 border-2 border-button b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Video Exercies <br /> Guide</h2>
                    </div>

                </div>
            </div>

            {/* 5TH SECTION WRITE UP */}
            <div data-aos='fade-down' className="h-96 text-center flex flex-col items-center justify-center max-sm:my-14">
                    <div className='h-80 w-full bg-[url(./assets/img//Mobile.jpg)] bg-contain bg-no-repeat bg-center '></div>
            </div>


        </>
    )
}

export default Banner