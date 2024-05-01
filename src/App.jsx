import { RouterProvider } from "react-router-dom";
import router from "./router";
import Login from "./components/loginsignup/Login";
import Signin from "./components/loginsignup/Signin";


const App = () => {
  return (
    <div className=" bg-bg-color">
    {/* <Login/> */}
    <Signin/>
      {/* <RouterProvider router0={router}/> */}
    </div>

  
  );
};

export default App;
