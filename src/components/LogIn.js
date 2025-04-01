import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import the navigation hook
import "./style.css";  // Ensure the path to style.css is correct

const Login = () => {
  const navigate = useNavigate();  // Hook for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/navbar");  // Navigate to the Navbar page after successful login
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="container">
      <div className="img">
        <img src="images" alt="Login" id="img1" />
        <p id="sg">LOGIN</p>
      </div>
      <p className="head">Connect Create Conquer</p>

      <div className="sign">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" id="submit">LOGIN</button>
        </form>
      </div>

      <div className="acc">
        <p className="ss">
          DON'T HAVE AN ACCOUNT? <a href="/signup">CREATE ONE</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
