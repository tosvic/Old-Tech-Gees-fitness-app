import React, { useState } from 'react';
import "../loginsignup/login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ username, password });      
  };

  const navigate = useNavigate
  return (
    <div className='login'>
      <h1>Welcome to Login</h1>
      <div className='border'>
        <h2 id='Head'>Login</h2>
       <form onSubmit={handleLogin} className='User'>
         <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id='submit'>Login</button>
        </form>
      </div>
      <div>
       <a onClick={()=>navigate('/MainLayout')} href="Login">Login</a>
      </div>

    </div>
  )
}

export default Login