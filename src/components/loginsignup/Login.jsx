import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate
  return (
    <div>

      <h1>Welcome to Login</h1>

      <div>
        <Link to></Link>
       <a onClick={()=>navigate('/MainLayout')} href="Login">Login</a>
      </div>

    </div>
  )
}

export default Login