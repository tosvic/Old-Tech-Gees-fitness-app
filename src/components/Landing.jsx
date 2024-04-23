import React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { useNavigate, Routes,} from 'react-router-dom';

import './Swiper.css'

import img01 from '/src/assets/img/04.jpg'
import img03 from '/src/assets/img/alex.png'
import img02 from '/src/assets/img/3.jpg'

const Landing = () => {

  const navigate = useNavigate()
  return (

    <main className=" min-h-screen place-items-center bg-bg-color px-0 py-0 sm:py-0 lg:px-0">
      <div className="swiper text-center text-black" >

        <div className='h-screen text-white'>

          <Swiper className="mySwiper">

            <SwiperSlide className='flex-col'>
              <img src={img01} alt="" />
              <div className='text-3xl p-2 pb-12 text-white lg:pb-20'>Start Your Journey Now <span className='text-button'>→</span> </div>
            </SwiperSlide>

            <SwiperSlide className='flex-col'>
              <img src={img03} alt="" />
              <div className='text-3xl p-2 pb-12 text-white lg:pb-20'>Your health is vital to us stay fit <span className='text-button'>→</span></div>
            </SwiperSlide>

            <SwiperSlide className='flex-col'>
              <img src={img02} alt="" />

              <div className='py-4  flex-1  lg:flex lg:gap-4'>
              <h3 className='text-3xl text-white'>Action is the key to all Success</h3>
              <button onClick={()=>navigate('./Signup')} className="bg-white hover:bg-button hover:text-white text-black font-semibold text-xl py-2 px-4 rounded lg:mb-20">
              Start Now
              </button>
              </div> 
              {/* <Routes path='/login' element={<Login />} /> */}
   
            </SwiperSlide>

          </Swiper>

        </div>

      </div>
    </main>
  );
};

export default Landing;
