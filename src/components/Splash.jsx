import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo2.png'

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
      <main className="grid min-h-screen place-items-center bg-bcolor px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
            <img src={logo} alt="" />
          <p className="text-xl text-slate-400">loading...</p>
        </div>
      </main>
  );
};

export default Splash;
