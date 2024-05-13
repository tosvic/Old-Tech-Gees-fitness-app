import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Singin.css";
import logo from '/src/assets/img/logo2.png'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted successfully:", formData);
    }

    const storedPassword = localStorage.getItem("password");
    const storedEmail= localStorage.getItem("email");
    if(formData.email === storedEmail && formData.password === storedPassword){
      localStorage.setItem('isLoggedIn', true)
      alert('logged in successfully')
    }else{
      setErrors('Invalid credentials or Not Signed in')
      alert(errors)
    }
    
    if(localStorage.getItem('isLoggedIn')){
      navigate("/dashboard")
    }
  };

  

  return (
    <div className="loginFormContainer bg-white mt-10">
      <img className="w-20 m-auto rounded-2xl" src={logo} alt="" />
      <div className="Texts text-xl font-medium text-black">
        <h3 className="productName text-center text-2xl font-extrabold p-6">
          {" "}
          LOGIN{" "}
        </h3>
        <h2 className="heroText text-xl  text-black text-center font-bold">
          Log in to your existing account{" "}
        </h2>
      </div>
      <form action="submit" onSubmit={formSubmitHandler}>
        <div className="FormContainer">
          <div>
            <input
              className="my-4 w-1/1 h-14  p-5  mx-auto input-bg-color outline-transparent rounded-xl shadow-lg flex text-xl font-large text-black"
              placeholder="E-mail"
              type="email"
              name="email"
              id="userEmail"
              value={formData.email}
              onChange={changeHandler}
              required
            />{" "}
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
 <input
              className="my-8 p-5  w-1/1 h-14 mx-auto mb-0 input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4"
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              id="userPassword"
              required
              // {...passwordInputTask}
            />{" "}
            {errors.email && <span>{errors.email}</span>}
          </div>
          <br />
        </div>

        <div className="form-submit-area items-center">
          <p className="message-bar text-md font-small text-center hover:text-button  text-black  ">
            {" "}
            Forgot password?{" "}
          </p>
          <Link to='/Signin'>
            <p className="message-bar text-md font-medium text-center text-gray-500 mt-6  ">
              {" "}
              Don't have an acccount? <span className="text-black text-xl hover:underline" >Sign-Up</span>{" "}
            </p>
          </Link>
          <button
            type="submit"
            className=" bg-button px-8 py-4 mt-8 mx-28 hover:bg-black rounded-xl text-white font-bold"
          >
            {" "}
            Log in{" "}
          </button>
         {/* {errors && <p>{errors}</p>} */}
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
