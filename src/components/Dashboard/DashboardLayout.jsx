import { Outlet } from "react-router-dom"
import "./dashboardlayout.css"
import SideNav from "./navigations/side/SideNav"
import TopNav from "./navigations/top/TopNav"
import DailyExcercise from './DailyWorkOut/DailyExcercise'
import ChartTwo from "./chatFolder/ChatTwo"

const DashboardLayout = ()=> {
    return(
        <>
    <div id='layout'>
        <div id='side-nav'>
          <SideNav />
        </div>
        <div id='display'>
          <TopNav />
          <div className="bodyContent">
            <div className="workNgraph">
             {/* <DailyExcercise/> */}
              <ChartTwo />
            </div>
              <Outlet/>
         
        </div>
        </div>
      </div>
        </>
    )
}

export default DashboardLayout