import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Singin.css";


const Login = () => {
  const [showMessage, setShowMessage] = useState("");
  useEffect(() => {
    if (showMessage.length > 0) {
      setTimeout(() => {
        setShowMessage("");
      }, 1000);
    }
  }, [showMessage.length > 0]);

  let emailInputTask;
  let passwordInputTask;
  const formSubmitHandler = () => {
    e.preventDefault();

    const data = {
      id: "",
      title: emailInputTask.value,
      description: passwordInputTask.value,
    };
    // dispatch({ type: ActionTypesEnum.Add, data });
    console.log(data);

    setShowMessage("value is greater than one");
  };

  return (
    <div className="loginFormContainer bg-bg-color">
      <div className="Texts text-xl font-medium text-black">
        <h3 className="productName text-center text-color-logo-txt font-extrabold p-6"> Vitality </h3>
        <h2 className="heroText text-xl  text-black text-center font-bold">Log in to your existing account </h2>
      </div>
      <form action="submit" onSubmit={formSubmitHandler}>
        <div classNameName="FormContainer">
          <input className="my-4 w-1/1 p-5  mx-auto input-bg-color outline-transparent rounded-xl shadow-lg flex text-xl font-large text-black "
            placeholder="E-mail"
            type="email"
            id="userEmail"
            required
            // {...emailInputTask}
          />{" "}
          <input className="my-4 p-5  w-1/1 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4"
            placeholder="Password"
            type="password"
            id="userPassword"
            required
            // {...passwordInputTask}
          />{" "}
          <br />
          
        </div>

        <div className="form-submit-area items-center">
          {/* {showMessage.length > 0 && (
            <p className="message-bar"> Task added successfully </p>
          )} */}
          
          <p className="message-bar text-xl font-medium text-center text-black  "> Forgot your password? </p>
          <button type="submit" className=" bg-button hover:bg-button-300...  logBtn" > Login  </button>
        </div>
      </form>
      {/* <div>
        <Link to={"/dashboard"}>Login</Link>
      </div> */}
      <Outlet />
    </div>
  );
};

export default Login;
