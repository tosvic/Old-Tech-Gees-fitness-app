import React from 'react'
import '../top/topNav.css'

import { RxAvatar, RxDropdownMenu } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import { VscBellSlashDot } from "react-icons/vsc";

const TopNav = () => {
  return (
    <div className='topNavContainer'>
      <div className="pleasantry">
        <h1 className="greeting"> Hello Sarah,</h1>
        <h5 className="name"> Good morning!</h5>
      </div>
      <div className="seacrh">
        <LuSearch/>
        {/* <div className=""> gjghkjg</div> */}
      </div>
      <div className="alertnProfile">
        <div className="bellIcon"> <VscBellSlashDot/></div>
        <i className='userAvartarorImage'><RxAvatar/></i>
        <h3 className="UserName"> Sarah Vwinks</h3>
        <div className="dropdownIcon"> <RxDropdownMenu/> </div>
      </div>
      
    </div>
  )
}

export default TopNav
