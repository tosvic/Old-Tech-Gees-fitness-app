import { Outlet } from "react-router-dom"
import "./dashboardlayout.css"
// import SideNav from "./navigations/side/SideNav"
// import TopNav from "./navigations/top/TopNav"
import DailyExcercise from './DailyWorkOut/DailyExcercise'
import ChartTwo from "./chatFolder/ChatTwo"
import Categories from "./Categories/Categories"

const DashboardLayout = ()=> {
    return(
        <>
    <div id='layout'>
        <div >
              <Outlet/>
            <div className="bodyContent">
              <div className="workNgraph">
              {/* <DailyExcercise/><br /> */}
                <ChartTwo />
            </div>
         
        </div>
        </div>
      </div>
        </>
    )
}

export default DashboardLayout