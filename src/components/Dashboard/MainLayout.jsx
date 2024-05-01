import React from 'react'
import "./mainlayout.css"

import { Outlet } from 'react-router-dom'




const MainLayout = () => {
  return (
    <>
      <div id='layout'>
        <div id='side-nav'>
          {/* <SideNav /> */}
        </div>
        <div id='display'>
          {/* <TopNav /> */}
          <div className="bodyContent">
          
              <Outlet/>
         
        </div>
        </div>
      </div>

    </>
  )
}

export default MainLayout
