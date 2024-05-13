import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Dashboard/MainLayout";
import Landingpage from "./components/Landingpage";
import Splash from "./components/Splash"
import Login from "./components/loginsignup/Login";
import  Signin from "./components/loginsignup/Signin"
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Categories from "./components/Dashboard/Categories/Categories";


import AerobicAdvanced from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/Advanced";
import AerobicBeginner from "./components/Dashboard/CategoriesWithApi/Aerobics/Beginner/Beginner";
import Aerobicintermediate from "./components/Dashboard/CategoriesWithApi/Aerobics/Intermediate/Intermediate";

import AnaerobicAdvanced from "./components/Dashboard/CategoriesWithApi/Anaerobics/Advance/Advanced";
import AnaerobicBeginner from "./components/Dashboard/CategoriesWithApi/Anaerobics/Beginner/Beginner";
import Anaerobicintermediate from "./components/Dashboard/CategoriesWithApi/Anaerobics/Intermediate/Intermediate";



// import AerobicsAdRoomOne from "./";
import YogaAdvanced from "./components/Dashboard/CategoriesWithApi/Yoga/Advanced/Advanced";
import YogaBeginner from "./components/Dashboard/CategoriesWithApi/Yoga/Beginner/Beginner";
import YogaIntermediate from "./components/Dashboard/CategoriesWithApi/Yoga/Intermediate/Intermediate";


//Exercise Rooms starts - Aerobics Advance
import AerobicsAdRoomOne from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomOne";
import AerobicsAdRoomTwo from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomTwo";
import AerobicsAdRoomThree from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomThree";
import AerobicsAdRoomFour from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomFour";
import AerobicsAdRoomFive from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomFive";
//Exercise Rooms starts - Aerobics Beginner
import AerobicsBeRoomOne from "./components/Dashboard/CategoriesWithApi/Aerobics/Beginner/GymRooms/RoomOne";
import AerobicsBeRoomTwo from "./components/Dashboard/CategoriesWithApi/Aerobics/Beginner/GymRooms/RoomTwo";
import AerobicsBeRoomThree from "./components/Dashboard/CategoriesWithApi/Aerobics/Beginner/GymRooms/RoomThree";
import AerobicsBeRoomFour from "./components/Dashboard/CategoriesWithApi/Aerobics/Beginner/GymRooms/RoomFour";
import AerobicsBeRoomFive from "./components/Dashboard/CategoriesWithApi/Aerobics/Beginner/GymRooms/RoomFive";
//Exercise Rooms starts - Aerobics Intermediate
import AerobicsInRoomOne from "./components/Dashboard/CategoriesWithApi/Aerobics/Intermediate/GymRooms/RoomOne";
import AerobicsInRoomTwo from "./components/Dashboard/CategoriesWithApi/Aerobics/Intermediate/GymRooms/RoomTwo";
import AerobicsInRoomThree from "./components/Dashboard/CategoriesWithApi/Aerobics/Intermediate/GymRooms/RoomThree";
import AerobicsInRoomFour from "./components/Dashboard/CategoriesWithApi/Aerobics/Intermediate/GymRooms/RoomFour";
import AerobicsInRoomFive from "./components/Dashboard/CategoriesWithApi/Aerobics/Intermediate/GymRooms/RoomFive";


//Exercise Rooms starts - Anaerobics Advance
import AnaerobicsAdRoomOne from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomOne";
import AnaerobicsAdRoomTwo from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomTwo";
import AnaerobicsAdRoomThree from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomThree";
import AnaerobicsAdRoomFour from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomFour";
import AnaerobicsAdRoomFive from "./components/Dashboard/CategoriesWithApi/Aerobics/Advance/GymRooms/RoomFive";
//Exercise Rooms starts - Anaerobics Beginner
import AnaerobicsBeRoomOne from "./components/Dashboard/CategoriesWithApi/Anaerobics/Beginner/GymRooms/RoomOne";
import AnaerobicsBeRoomTwo from "./components/Dashboard/CategoriesWithApi/Anaerobics/Beginner/GymRooms/RoomTwo";
import AnaerobicsBeRoomThree from "./components/Dashboard/CategoriesWithApi/Anaerobics/Beginner/GymRooms/RoomThree";
import AnaerobicsBeRoomFour from "./components/Dashboard/CategoriesWithApi/Anaerobics/Beginner/GymRooms/RoomFour";
import AnaerobicsBeRoomFive from "./components/Dashboard/CategoriesWithApi/Anaerobics/Beginner/GymRooms/RoomFive";
//Exercise Rooms starts - Anaerobics Intermediate
import AnaerobicsInRoomOne from "./components/Dashboard/CategoriesWithApi/Anaerobics/Intermediate/GymRooms/RoomOne";
import AnaerobicsInRoomTwo from "./components/Dashboard/CategoriesWithApi/Anaerobics/Intermediate/GymRooms/RoomTwo";
import AnaerobicsInRoomThree from "./components/Dashboard/CategoriesWithApi/Anaerobics/Intermediate/GymRooms/RoomThree";
import AnaerobicsInRoomFour from "./components/Dashboard/CategoriesWithApi/Anaerobics/Intermediate/GymRooms/RoomFour";
import AnaerobicsInRoomFive from "./components/Dashboard/CategoriesWithApi/Anaerobics/Intermediate/GymRooms/RoomFive";

//Exercise Rooms starts - Yoga Advance
import YogaAdRoomOne from "./components/Dashboard/CategoriesWithApi/Yoga/Advanced/GymRooms/RoomOne";
import YogaAdRoomTwo from "./components/Dashboard/CategoriesWithApi/Yoga/Advanced/GymRooms/RoomTwo";
import YogaAdRoomThree from "./components/Dashboard/CategoriesWithApi/Yoga/Advanced/GymRooms/RoomThree";
import YogaAdRoomFour from "./components/Dashboard/CategoriesWithApi/Yoga/Advanced/GymRooms/RoomFour";
import YogaAdRoomFive from "./components/Dashboard/CategoriesWithApi/Yoga/Advanced/GymRooms/RoomFive";
//Exercise Rooms starts - Yoga Beginner
import YogaBeRoomOne from "./components/Dashboard/CategoriesWithApi/Yoga/Beginner/GymRooms/RoomOne";
import YogaBeRoomTwo from "./components/Dashboard/CategoriesWithApi/Yoga/Beginner/GymRooms/RoomTwo";
import YogaBeRoomThree from "./components/Dashboard/CategoriesWithApi/Yoga/Beginner/GymRooms/RoomThree";
import YogaBeRoomFour from "./components/Dashboard/CategoriesWithApi/Yoga/Beginner/GymRooms/RoomFour";
import YogaBeRoomFive from "./components/Dashboard/CategoriesWithApi/Yoga/Beginner/GymRooms/RoomFive";
//Exercise Rooms starts - Yoga Intermediate
import YogaInRoomOne from "./components/Dashboard/CategoriesWithApi/Yoga/Intermediate/GymRooms/RoomOne";
import YogaInRoomTwo from "./components/Dashboard/CategoriesWithApi/Yoga/Intermediate/GymRooms/RoomTwo";
import YogaInRoomThree from "./components/Dashboard/CategoriesWithApi/Yoga/Intermediate/GymRooms/RoomThree";
import YogaInRoomFour from "./components/Dashboard/CategoriesWithApi/Yoga/Intermediate/GymRooms/RoomFour";
import YogaInRoomFive from "./components/Dashboard/CategoriesWithApi/Yoga/Intermediate/GymRooms/RoomFive";


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
        path: "/Signin",
        element: <Signin/>
      },
      {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
          {
            
            path: "/dashboard",
            element: <Categories/>,
            
          }
        ]
      },
        //Aerobics Category
        {
          path: "/dashboard/aerobic/advanced",
          element: <AerobicAdvanced/>
        },
        {
          path: "/dashboard/aerobic/beginner",
          element: <AerobicBeginner/>
        },
        {
          path: "/dashboard/aerobic/intermediate",
          element: <Aerobicintermediate/>
        },
          
        //Anaerobics Category
        {
          path: "/dashboard/anaerobic/advanced",
          element: <AnaerobicAdvanced/>
        },
        {
          path: "/dashboard/anaerobic/beginner",
          element: <AnaerobicBeginner/>
        },
        {
          path: "/dashboard/anaerobic/intermediate",
          element: <Anaerobicintermediate/>
        },
          
        //Yoga Category

        {
          path: "/dashboard/yoga/advanced",
          element: <YogaAdvanced/>
        },
        {
          path: "/dashboard/yoga/beginner",
          element: <YogaBeginner/>
        },
        {
          path: "/dashboard/yoga/intermediate",
          element: <YogaIntermediate/>
        },

          //Aerobics Exercise Rooms(Base Lines) start

         // Aerobics advance
          {
            path:"/dashboard/aerobic/advanced/AerobicsAdRoomOne",
            element:<AerobicsAdRoomOne/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsAdRoomTwo',
            element:<AerobicsAdRoomTwo/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsAdRoomThree',
            element:<AerobicsAdRoomThree/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsAdRoomFour',
            element:<AerobicsAdRoomFour/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsAdRoomFive',
            element:<AerobicsAdRoomFive/>
          },
         // Aerobics beginner
          {
            path:'/dashboard/aerobic/advanced/AerobicsBeRoomOne',
            element:<AerobicsBeRoomOne/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsBeRoomTwo',
            element:<AerobicsBeRoomTwo/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsBeRoomThree',
            element:<AerobicsBeRoomThree/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsBeRoomFour',
            element:<AerobicsBeRoomFour/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsBeRoomFive',
            element:<AerobicsBeRoomFive/>
          },
         // Aerobics intermediate
          {
            path:'/dashboard/aerobic/advanced/AerobicsInRoomOne',
            element:<AerobicsInRoomOne/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsInRoomTwo',
            element:<AerobicsInRoomTwo/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsInRoomThree',
            element:<AerobicsInRoomThree/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsInRoomFour',
            element:<AerobicsInRoomFour/>
          },
          {
            path:'/dashboard/aerobic/advanced/AerobicsInRoomFive',
            element:<AerobicsInRoomFive/>
          },


         // Anaerobics Advance
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsAdRoomOne',
            element:<AnaerobicsAdRoomOne/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsAdRoomTwo',
            element:<AnaerobicsAdRoomTwo/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsAdRoomThree',
            element:<AnaerobicsAdRoomThree/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsAdRoomFour',
            element:<AnaerobicsAdRoomFour/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsAdRoomFive',
            element:<AnaerobicsAdRoomFive/>
          },
         // Anaerobics Beginner
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsBeRoomOne',
            element:<AnaerobicsBeRoomOne/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsAdRoomTwo',
            element:<AnaerobicsBeRoomTwo/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsBeRoomThree',
            element:<AnaerobicsBeRoomThree/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsBeRoomFour',
            element:<AnaerobicsBeRoomFour/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsBeRoomFive',
            element:<AnaerobicsBeRoomFive/>
          },
         // Anaerobics Intermediate
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsInRoomOne',
            element:<AnaerobicsInRoomOne/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsInRoomTwo',
            element:<AnaerobicsInRoomTwo/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsInRoomThree',
            element:<AnaerobicsInRoomThree/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsInRoomFour',
            element:<AnaerobicsInRoomFour/>
          },
          {
            path:'/dashboard/aerobic/advanced/AnaerobicsInRoomFive',
            element:<AnaerobicsInRoomFive/>
          },


         //Yoga Advance
          {
            path:'/dashboard/yoga/advanced/YogaAdRoomOne',
            element:<YogaAdRoomOne/>
          },
          {
            path:'/dashboard/yoga/advanced/YogaAdRoomTwo',
            element:<YogaAdRoomTwo/>
          },
          {
            path:'/dashboard/yoga/advanced/YogaAdRoomThree',
            element:<YogaAdRoomThree/>
          },
          {
            path:'/dashboard/yoga/advanced/YogaAdRoomFour',
            element:<YogaAdRoomFour/>
          },
          {
            path:'/dashboard/yoga/advanced/YogaAdRoomFive',
            element:<YogaAdRoomFive/>
          },
         //Yoga Beginner
          {
            path:'/dashboard/yoga/beginner/YogaBeRoomOne',
            element:<YogaBeRoomOne/>
          },
          {
            path:'/dashboard/yoga/beginner/YogaBeRoomTwo',
            element:<YogaBeRoomTwo/>
          },
          {
            path:'/dashboard/yoga/beginner/YogaBeRoomThree',
            element:<YogaBeRoomThree/>
          },
          {
            path:'/dashboard/yoga/beginner/YogaBeRoomFour',
            element:<YogaBeRoomFour/>
          },
          {
            path:'/dashboard/yoga/beginner/YogaBeRoomFive',
            element:<YogaBeRoomFive/>
          },
         //Yoga Intermediate
          {
            path:'/dashboard/yoga/intermediate/YogaInRoomOne',
            element:<YogaInRoomOne/>
          },
          {
            path:'/dashboard/yoga/intermediate/YogaInRoomTwo',
            element:<YogaInRoomTwo/> 
          },
          {
            path:'/dashboard/yoga/intermediate/YogaInRoomThree',
            element:<YogaInRoomThree/>
          },
          {
            path:'/dashboard/yoga/intermediate/YogaInRoomFour',
            element:<YogaInRoomFour/>
          },
          {
            path:'/dashboard/yoga/intermediate/YogaInRoomFive',
            element:<YogaInRoomFive/>
          },
    ]
  },
]);

export default router;
