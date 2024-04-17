import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import { MdFitnessCenter } from 'react-icons/md';

function Banner() {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-squart',
            delay: 0,
            duration: 2000
        })

    });


    return (
        <>
            <div id="Home" className='main-font h-full bg-[url(./public/banner0.jpg)] bg-bg-color bg-no-repeat bg-left-bottom bg-cover lg:px-52 px-10 lg:py-20 max-sm:pt-20 md:pt-20 gap-5 flex lg:flex-col flex-col justify-between'>

                <div className='h-full lg:py-40 flex-col justify-center lg:items-start items-center text-white mt-14'>
                    <h1 data-aos='fade-right' className='text-[3.7rem] font-bold mb-4 leading-normal text-button'>Get FIT for LIFE <br />Not for others...</h1>

                    <p data-aos='fade-left'
                        className='text-text-color max-w-screen-lg lg:text-justify'>Lorem ipsum dolor sit amet consectetur,
                        oribus laboriosam <br />rerum possimus, error tempore corrupti sint sit iusto ad. <br />
                        Lorem ipsum dolor sit amet consectetur,
                        oribus laboriosam <br />rerum possimus, error tempore corrupti sint sit iusto ad.</p>
                </div>

                <div data-aos='fade-left' className="max-sm:mt-20 flex mb-10">
                    <a
                        href="#"
                        className="rounded-md bg-button px-6 py-4 text-mD font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button">
                        Start Now
                    </a>
                </div>
            </div>

            {/* 2ND SECTION WRITE UP */}
            <div data-aos='fade-right' className="h-80 text-center flex flex-col items-center justify-center max-sm:my-14 ">
                <h1 data-aos='fade-left' className="text-3xl font-bold tracking-tight text-bg-color sm:text-4xl px-5">
                    welcome to OUR - WORLD class fitness centre
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sed a, pariatur modi cupiditate,
                    ab error ea iusto harum aspernatur soluta alias consequuntur inventore!
                    Architecto quo suscipit velit tempore dolore!
                </p>
            </div>


            {/* 3RD SECTION -BASIC FEATURES */}

            <div id="Home" className='main-font h-screen bg-[url(./public/banner.jpg)] bg-left-bottom bg-no-repeat lg:px-20 px-10 lg:py-0 max-sm:pt-20 md:pt-20 gap-20 flex lg:flex-row flex-row justify-between  items-center'>

                <div data-aos='fade-up' src="" className='bg-[url(./public/3.jpg)] border-2 h-80 w-96 bg-no-repeat bg-cover bg-center p-1 border-button py-0 max-sm:mt-8' alt="" />


                <div className='h-full lg:py-20 flex-col justify-center lg:items-start items-center text-white'>
                    <h1 data-aos='fade-right' className='text-[3rem] font-bold mb-2 leading-normal text-button'>Your Fitness Corner</h1>
                    <p data-aos='fade-left' className='text-text-color text-[.9rem] max-w-screen-lg'>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Fugiat, excepturi soluta temporibus, laborum quae voluptate adipisci
                        libero iste delectus amet aliquam veritatis nulla illum sunt necessitatibus ipsam dolor molestiae officiis?.</p>

                    <div data-aos="fade-up"
                        data-aos-duration="2000" className="ml-10 p-0">

                        <p className="text-text-color max-w-screen-lg text-xl pt-5 ml-1">
                            <li >Aerobic</li>
                            <li className='mt-2 '>Cardio</li>
                            <li className='mt-2'>Abdomen</li>
                            <li className='mt-2'>Shoulder</li>
                            <li className='mt-2'>Round the clock</li>
                            <li className='mt-2'>AB Chrunch</li>
                            <li className='mt-2'>Special Trainer</li>

                        </p>
                    </div>

                </div>
            </div>


            {/* 4TH SECTION */}
            <div id="About" className='main-font  lg:px-60 px-10 lg:py-0 max-sm:pt-20 md:pt-20 gap-5 flex lg:flex-col flex-col justify-between  items-center'>

                <div className='h-full lg:py-40 flx flex-col justify-center lg:items-start items-center'>
                    <h5 data-aos='fade-right' className='text-[3em] font-extrabold  text-bg-color tracking-[.2rem]'>ARE YOU READY TO GET <br /> FIT AND IN SHAPE</h5>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10 mt-20 p-0 max-md:my-20 text-center ">
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-black rounded-3xl h-36 w-44 border-2 border-text-color b_glow"><MdFitnessCenter className='text-[20px] mb-2' /> Personalized Wellness Assessment</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-black rounded-3xl h-36 w-44 border-2 border-text-color b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Customized <br /> Plans</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-black rounded-3xl h-36 w-44 border-2 border-text-color b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Rewarding <br />Features</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-black rounded-3xl h-36 w-44 border-2 border-text-color b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Personalised Workout <br /> Activites</h2>
                        <h2 data-aos="fade-up" className="flex flex-col items-center justify-center font-semibold text-black rounded-3xl h-36 w-44 border-2 border-text-color b_glow"><MdFitnessCenter className='text-[20px] mb-2' />Video Exercies <br /> Guide</h2>
                    </div>

                </div>
            </div>

            {/* 5TH SECTION WRITE UP */}
            <div data-aos='fade-down' className="h-96 text-center flex flex-col items-center justify-center max-sm:my-14">
                    <div className='h-80 w-full bg-[url(./public/Mobile.jpg)] bg-contain bg-no-repeat bg-center '></div>
            </div>


        </>
    )
}

export default Banner