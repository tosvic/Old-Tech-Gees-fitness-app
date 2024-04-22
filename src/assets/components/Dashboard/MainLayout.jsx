import React from 'react'
// import { Outlet } from 'react-router-dom'
import "./mainlayout.css"
// import Admin from '../pages/Admin'
import SideNav from '../Dashboard/navigations/side/SideNav'
import TopNav from '../Dashboard/navigations/top/TopNav'
import AerobicsCard from '../Dashboard/CardCarousel/AerobicsCard'
import TrainerOne from './CardCarousel/cardimg/Coach1.png'
import DailyExcercise from '../Dashboard/DailyWorkOut/DailyExcercise'
import Categories from '../Dashboard/Categories/Categories'



const Aerobics = [
  {title:'Aerobics Trainer', image: TrainerOne, trainerName:'Trainer1',  backgroundColor: 'var(--color-card)'},
  {title:'Aerobics Trainer', image: TrainerOne, trainerName:'Trainer2',  backgroundColor: 'var(--color-card2)'},
  {title:'Aerobics Trainer', image:TrainerOne, trainerName:'Trainer3',  backgroundColor: 'var(--color-card)'},
  {title:'Aerobics Trainer', image:TrainerOne, trainerName:'Trainer4',  backgroundColor: 'var(--color-card2)'}
]
const YogaTrainer = [
  {title:'yoga Trainer', image: TrainerOne, trainerName:'Trainer1',  backgroundColor: 'var(--color-card)'},
  {title:'Yoga Trainer', image: TrainerOne, trainerName:'Trainer2',  backgroundColor: 'var(--color-card2)'},
  {title:'yoga Trainer', image:TrainerOne, trainerName:'Trainer3',  backgroundColor: 'var(--color-card)'},
  {title:'yoga Trainer', image:TrainerOne, trainerName:'Trainer4',  backgroundColor: 'var(--color-card2)'}
]
const AnaerobicsTrainer = [
  {title:'Anaerobics Trainer', image: TrainerOne, trainerName:'Trainer1',  backgroundColor: 'var(--color-card)'},
  {title:'Anaerobics Trainer', image: TrainerOne, trainerName:'Trainer2',  backgroundColor: 'var(--color-card2)'},
  {title:'Anaerobics Trainer', image:TrainerOne, trainerName:'Trainer3',  backgroundColor: 'var(--color-card)'},
  {title:'Anaerobics Trainer', image:TrainerOne, trainerName:'Trainer4',  backgroundColor: 'var(--color-card2)'}
]
const MainLayout = () => {
  return (
    <div id='layout'>
        <div id='side-nav'>
        <SideNav/>
        </div>
    <div id='display'>
      <TopNav />
      {/* <div className="bodyContent"> */}
        <div className="firstRow">
         <AerobicsCard cards={Aerobics} className="YogaSlider"/>
         {/* <AnaerobicsCard cards={YogaTrainer} className="AerobicsSlider"/> */}
         {/* <YogaCard cards={AnaerobicsTrainer} className="AnaerobicsSlider"/> */}
          <DailyExcercise className="Dailies"/>
          <Categories/>
        </div>
      {/* </div> */}
     </div>

    </div>
  )
}

export default MainLayout
