import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-[url(/src/assets/img/alex.png)] max-md:bg-right bg-cover">
      <form className="w-full max-w-sm bg-slate-100 p-4 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center  mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
          <input type="text" id="username" placeholder="Enter Username/Email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-button" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
          <input type="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-button" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-40 px-3 py-2 text-white bg-button rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
