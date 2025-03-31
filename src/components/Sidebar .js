import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Stats Section */}
      <div className="profile-stats">
        <div className="profile-stats__item">
          <h5>Who's Viewed Your Profile</h5>
          <p>152</p>
        </div>
        <div className="profile-stats__item">
          <h5>Impressions of Your Posts</h5>
          <p>234</p>
        </div>
      </div>

      {/* Saved Posts Section */}
      <div className="saved-posts">
        <h5>Saved Posts</h5>
        <ul>
          <li><a href="#">Post 1</a></li>
          <li><a href="#">Post 2</a></li>
          <li><a href="#">Post 3</a></li>
        </ul>
      </div>

      {/* Events and Newsletters Section */}
      <div className="events-newsletters">
        <h5>Events</h5>
        <ul>
          <li><a href="#">Tech Conference 2025</a></li>
          <li><a href="#">React Summit</a></li>
        </ul>
        
        <h5>Newsletters</h5>
        <ul>
          <li><a href="#">Tech News Weekly</a></li>
          <li><a href="#">React Dev Digest</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
