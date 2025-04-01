import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/LogIn';
import Navbar from './components/navbar';
import ProfileIcon from './components/ProfileIcon';  // Import ProfileIcon component
import ProfilePage from './components/ProfilePage';  // Import ProfilePage component
import Sidebar from './components/Sidebar ';





function App() { 
  return(
    <>
  <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* This is the initial page - Login */}
        <Route path="/navbar" element={<Navbar />} />  {/* This is the next page - Navbar */}
      </Routes>
    </Router>
    <div className='App'>
    <Navbar />  
    
    </div>
    <Router>
      <div className="App">
        <ProfileIcon />  {/* Render the ProfileIcon component */}
        
        {/* Update Switch to Routes */}
        <Routes>
          <Route exact path="/" element={<ProfileIcon />} />
          <Route exact path="/profile" element={<ProfilePage />} />  {/* Use `element` prop to pass components */}
        </Routes>
      </div>
    </Router>
    <div className="App">
      <Sidebar />
    </div>

    </>
  );
}

export default App;
