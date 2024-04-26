import MainLayout from '../MainLayout'
import Beginner from '../CategoriesWithApi/Yoga/Beginner/Beginner.jsx'


import React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    },
    {
        path: "MainLayout/Beginner",
        element: <Beginner/>
    }
    // {
    //     path: "/MainLayout/Yoga/Beginner",
    //     element: <YoBeginner/>
    // }
    // {
    //     path: "/user",
    //     element: <Users/>
    // },
    // {
    //     path: "/admin",
    //     element: <Admin/>
    // },
    // {
    //     path: "/home",
    //     element: <Home/>
    // },
    // {
    //     path: "*",
    //     element: "Page not Found"
    // }

]
)

export default router