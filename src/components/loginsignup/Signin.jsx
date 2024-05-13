import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import "./Singin.css";
import logo from '/src/assets/img/logo2.png'
// import MainLayout from "../Dashboard/MainLayout";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  });


  
  const email = useRef()
  const firstName = useRef()
  const lastName = useRef()
  const password = useRef()
  // const [showHome,setShowHome]= useState(false)
  // const signinSuccess = window.location.DashboardLayout
  // useEffect(()=>{
  //   if(signinSuccess){
  //     setShowHome(true)
  //   }
  // }) 

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    localStorage.setItem("firstName", firstName.current.value);
      localStorage.setItem("lastName", lastName.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signin", password.current.value);
      Alert('Account created successfully!');
      window.location.reload()
  }
  const validateForm = () => {
    let errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const formSubmitHandler = () => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted successfully:", formData)
    }
  };

  return (
    <>
      {/* {showHome? <DashboardLayout/> :  */}
      <div className="loginFormContainer bg-white mt-10">
      <img className="w-20 m-auto rounded-2xl" src={logo} alt="" />

      <div className="Texts text-xl font-medium text-black">
      <h3 className="productName text-center text-2xl font-extrabold p-6">
            SIGN-UP
          </h3>
          <h2 className="heroText text-sm  text-button ml-16 font-bold">
            Create an Account
          </h2>
        </div>
        <form  onSubmit={formSubmitHandler}>
          <div className="FormContainer">
            <div>
              <input
                className="my-4 w-1/1 h-14  p-5  mx-auto input-bg-color outline-transparent rounded-xl shadow-lg flex text-xl font-large text-black"
                placeholder="First name"
                ref={firstName}
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={changeHandler}
                required
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <input
                className="my-4 w-1/1 h-14  p-5  mx-auto input-bg-color outline-transparent rounded-xl shadow-lg flex text-xl font-large text-black "
                placeholder="Last name"
                ref={lastName}
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={changeHandler}
                required
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <input
                className="my-4 p-5  w-1/1 h-14 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4"
                placeholder="Email"
                type="email"
                ref={email}
                name="email"
                value={formData.email}
                onChange={changeHandler}
                id="userEmail"
                required
                // {...passwordInputTask}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <input
                className="my-4 p-5  w-1/1 h-14 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4"
                placeholder="Password"
                ref={password}
                type="password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                id="userPassword"
                required
                // {...passwordInputTask}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <br />
          </div>

          <div className="form-submit-area items-center">

            <Link to='/login'>
              <p className="message-bar text-xl font-medium text-center text-black  ">
              Already have an acount? <span className="text-black text-xl hover:underline">Log in</span>
              </p>

            </Link>
            <Link to='/Login'>
              <button
                type="submit"
                className=" bg-button px-8 py-4 mt-8 mx-28 hover:bg-black rounded-xl text-white font-bold"
              >
                Sign in
              </button>
            </Link>
          </div>
        </form>
        
        <Outlet />
      </div>
      {/* } */}
    </>
  );
};

export default Login;
