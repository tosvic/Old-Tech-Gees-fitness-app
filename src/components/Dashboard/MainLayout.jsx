import React from 'react'
import "./mainlayout.css"
import { FaHome, FaHamburger, FaUserCircle } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'






const MainLayout = () => {
  return (
    <>
      <div className='bg-white'>
        <h1 className='p-4 text-xl font-bold text-button'>Welcome to your fitness corner 🏋️‍♂️</h1>

        <div className="bodyContent p-3">

          <Outlet />

        </div>
      </div>


      <div className='bg-black w-full bottom-0 fixed  text-bg-color'>
        <div className='flex h-20 list-none justify-around items-center'>
          <Link to='/Dashboard'>
            <li className='font-medium text-button'><FaHome className='text-xl ml-3' /><a href="">Home</a></li>
          </Link>
          {/* <li><FaHamburger className='text-2xl ml-3' /><a href="">Workout</a>  </li> */}
          {/* <li><FaUserCircle className='text-2xl ml-3' /><a href="">Profile</a> </li> */}

          <Link to='/Login'>
            <li className='font-medium text-bg-color'><a href="">Logout</a></li>
          </Link>
        </div>
      </div>

    </>
  )
}

export default MainLayout
