import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css"; // Import CSS

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Join Now</h2>
        <p className="signup-subtitle">Make the most of your professional life</p>

        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <button onClick={() => navigate("/dashboard")} className="signup-btn">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
