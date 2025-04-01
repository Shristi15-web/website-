import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import CSS

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <p>Manage your profile, connections, and more!</p>

        <button onClick={() => navigate("/")} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
