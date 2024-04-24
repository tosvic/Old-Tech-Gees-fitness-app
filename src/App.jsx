import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './components/Splash';
import Landing from './components/Landing';
import Signup from './components/loginsignup/Signup';
import Landingpage from './components/Landingpage';
import Login from './components/loginsignup/Login';
import MainLayout from './components/Dashboard/MainLayout';
import Form from './components/Form';
import {DataProvider} from './components/Form'


const App = () => {
  return (
    <DataProvider>
      <Router>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path="/Splash" element={<Splash />} />
        <Route path="/landing/*" element={<Landing />} />
        <Route path="/Landing/Signup" element={<Signup />} />
        <Route path="/Landing/Form" element={<Form/>}/>
        <Route path="/Landing/Login" element={<Login />} /> 

        <Route path="/Landing/Login/MainLayout" element={<MainLayout />} />

      </Routes>
    </Router>
    </DataProvider>
    
  );
};

export default App;
