import { RouterProvider } from "react-router-dom";
import router from "./router";
import Login from "./components/loginsignup/Login";
import Signin from "./components/loginsignup/Signin";
// import Categories from "./components/Categories/Categories";


const App = () => {
  return (
    

    <div className="bg-bg-color">
       {/* <Workout/> */}
      <RouterProvider router={router}/>
    </div>

  
  );
};

export default App;
