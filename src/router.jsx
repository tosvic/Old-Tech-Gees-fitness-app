import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Dashboard/MainLayout";
import Landingpage from "./components/Landingpage";
import Splash from "./components/Splash"
import Login from "./components/loginsignup/Login";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Categories from "./components/Dashboard/Categories/Categories";
import AerobicAdvanced from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/Advanced";
import AerobicBeginner from "./components/Dashboard/CategoriesWithApi/Aerobics/Beginner/Beginner";
import Aerobicintermediate from "./components/Dashboard/CategoriesWithApi/Aerobics/Intermediate/Intermediate";

// import AerobicsAdRoomOne from "./";
import AerobicsAdRoomOne from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomFive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landingpage/>
      },
      {
        path: "/splash",
        element: <Splash/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
          {
            
            path: "/dashboard",
            element: <Categories/>,
            children: [
              {
                path: "/dashboard/aerobic/advanced",
                element: <AerobicAdvanced/>,
                children:[
                  {
                    path:"/dashboard/aerobic/advanced/AerobicsAdRoomOne",
                    element:<AerobicsAdRoomOne/>
                  }
                ]
              },
              {
                path: "/dashboard/aerobic/beginner",
                element: <AerobicBeginner/>
              },
              {
                path: "/dashboard/aerobic/intermediate",
                element: <Aerobicintermediate/>
              },
            ]
          }
        ]
      }
    ]
  },
  
  
]);

export default router;
