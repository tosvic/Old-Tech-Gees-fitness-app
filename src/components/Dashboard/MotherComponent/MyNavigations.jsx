import { RouterProvider } from "react-router-dom"
// import UserContext from "./UserContext"

function MyNavigations() {
  
  return (
    <>
        {/* <UserContext>
            <RouterProvider router={router}/>
        </UserContext> */}
        
        <RouterProvider router={MainLayoutRouter}/>
    </>
  )
}

export default MyNavigations