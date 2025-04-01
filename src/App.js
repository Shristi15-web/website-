import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import SignUpPage from './Components/SignUpPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </Router>
    
  );
}

export default App;
