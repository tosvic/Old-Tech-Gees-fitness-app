import React from 'react'
// import { Outlet } from 'react-router-dom'
import "./mainlayout.css"
// import Admin from '../pages/Admin'
import SideNav from '../Dashboard/navigations/side/SideNav'
import TopNav from '../Dashboard/navigations/top/TopNav'
import AerobicsCard from '../Dashboard/CardCarousel/AerobicsCard'
import TrainerOne from './CardCarousel/cardimg/Coach1.png'
import DailyExcercise from '../Dashboard/DailyWorkOut/DailyExcercise'
import ChatTwo from './chatFolder/ChatTwo.jsx'
import Categories from '../Dashboard/Categories/Categories'
// import { PiChartLineDownDuotone } from 'react-icons/pi'



const Aerobics = [
  { title: 'Aerobics Trainer', image: TrainerOne, trainerName: 'Trainer1', backgroundColor: 'var(--color-card)' },
  { title: 'Aerobics Trainer', image: TrainerOne, trainerName: 'Trainer2', backgroundColor: 'var(--color-card2)' },
  { title: 'Aerobics Trainer', image: TrainerOne, trainerName: 'Trainer3', backgroundColor: 'var(--color-card)' },
  { title: 'Aerobics Trainer', image: TrainerOne, trainerName: 'Trainer4', backgroundColor: 'var(--color-card2)' }
]
const YogaTrainer = [
  { title: 'yoga Trainer', image: TrainerOne, trainerName: 'Trainer1', backgroundColor: 'var(--color-card)' },
  { title: 'Yoga Trainer', image: TrainerOne, trainerName: 'Trainer2', backgroundColor: 'var(--color-card2)' },
  { title: 'yoga Trainer', image: TrainerOne, trainerName: 'Trainer3', backgroundColor: 'var(--color-card)' },
  { title: 'yoga Trainer', image: TrainerOne, trainerName: 'Trainer4', backgroundColor: 'var(--color-card2)' }
]
const AnaerobicsTrainer = [
  { title: 'Anaerobics Trainer', image: TrainerOne, trainerName: 'Trainer1', backgroundColor: 'var(--color-card)' },
  { title: 'Anaerobics Trainer', image: TrainerOne, trainerName: 'Trainer2', backgroundColor: 'var(--color-card2)' },
  { title: 'Anaerobics Trainer', image: TrainerOne, trainerName: 'Trainer3', backgroundColor: 'var(--color-card)' },
  { title: 'Anaerobics Trainer', image: TrainerOne, trainerName: 'Trainer4', backgroundColor: 'var(--color-card2)' }
]
const MainLayout = () => {
  return (
    <>
      <div id='layout'>
        <div id='side-nav'>
          <SideNav />
        </div>
        <div id='display'>
          <TopNav />
          {/* <div className="bodyContent"> */}
          <div className="firstRow flex max-md:flex-col gap-12 items-center pt-32">
            <DailyExcercise className="Dailies" />
            {/* <ChatTwo/> */}
            <ChatTwo />
            <Categories />
          </div>
          {/* <AerobicsCard cards={Aerobics} className="YogaSlider"/> */}

          {/* </div> */}

          <div className='flex mt-60 max-md:flex-col' >
          <DailyExcercise />
          <DailyExcercise />
          <DailyExcercise />
          </div>
        </div>
        
      </div>

    </>
  )
}

export default MainLayout
