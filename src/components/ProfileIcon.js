import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import './ProfileIcon.css';  // Import CSS for styling (You can create your own styling)

const ProfileIcon = () => {
  const navigate = useNavigate();  // Initialize navigate function for programmatic navigation

  // Function to handle profile icon click and navigate to the profile page
  const navigateToProfile = () => {
    navigate('/profile');  // Use navigate instead of history.push
  };

  return (
    <div className="profileIcon" onClick={navigateToProfile}>
      <img
        src="c:\Users\manta\OneDrive\Desktop\download.jpeg"  // Profile image placeholder (replace with actual image URL)
        alt="Profile Icon"
        className="profileIcon__image"
      />
      <div className="profileIcon__name">
        <span>Shristi</span> {/* Profile name */}
      </div>
    </div>
  );
};

export default ProfileIcon;
