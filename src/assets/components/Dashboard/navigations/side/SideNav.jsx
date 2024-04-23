import React from 'react'
// import Links from '../../links/Links'
import {AiFillSetting, AiOutlineLogin, AiOutlineUser, AiOutlineHome} from "react-icons/ai"
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "./sidenav.css"
const SideNav = () => {

  const path = [   
    {to: "/settings", label: "Settings", icon: <AiFillSetting/>},
    {to: "/user", label: "Users", icon: <AiOutlineUser/>},
    {to: "/admin", label: "Admin", icon: <MdOutlineAdminPanelSettings/>},
    {to: "/home", label: "Home", icon: < AiOutlineHome/>},
  ]
  return (
    <div id='links'>
     {
      path.map(({to, label, icon})=> (
        <div> 
          <i className='icon'> {icon} </i>
        {/* <Links key={label} to={to} label={label} icon={icon}/> */}
        </div>
      ))
     }   
      
    </div>
  )
}

export default SideNav
