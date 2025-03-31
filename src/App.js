import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import ProfileIcon from './components/ProfileIcon';  // Import ProfileIcon component
import ProfilePage from './components/ProfilePage';  // Import ProfilePage component
import Sidebar from './components/Sidebar ';

import Navbar from './components/navbar';

function App() { 
  return(
    <>
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
