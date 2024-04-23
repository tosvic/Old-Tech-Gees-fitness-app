import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate
  return (
    <div>

      <h1>Welcome to Login</h1>

      <div>
       <a onClick={()=>navigate('/MainLayout')} href="Login">Login</a>
      </div>

    </div>
  )
}

export default Login