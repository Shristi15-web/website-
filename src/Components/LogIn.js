import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import CSS

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Email and Password are required!");
    } else {
      setError(""); // Clear error
      navigate("/dashboard"); // Redirect to Dashboard
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Sign in</h2>
        <p className="login-subtitle">Stay updated on your professional world</p>

        <input
          type="email"
          placeholder="Email or Phone"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Show error message if fields are empty */}
        {error && <p className="error-message">{error}</p>}

        <button onClick={handleSignIn} className="signin-btn">
          Sign in
        </button>

        <p className="forgot-password">Forgot password?</p>

        <hr style={{ margin: "20px 0" }} />

        <button onClick={() => navigate("/signup")} className="signup-btn">
          Create one
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
