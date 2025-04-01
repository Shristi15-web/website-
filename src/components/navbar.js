import React, { Component } from 'react';
import './Navbar.css';  

class Navbar extends Component {
    state = {  } 
    render() { 
        return(
          
         
        
              <nav className="navbar">
                <div className="navbar__left">
                  PRO-CONNECT
                </div>
                <div className="navbar__center">
                  <input type="text" placeholder="Search" className="navbar__searchInput" />
                </div>
                <div className="navbar__right">
                  <div className="navbar__options">
                    <div className="navbar__option">
                      <i className="navbar__icon fas fa-home"></i>
                      <span>Home</span>
                    </div>
                    <div className="navbar__option">
                      <i className="navbar__icon fas fa-search"></i>
                      <span>My Network</span>
                    </div>
                    <div className="navbar__option">
                      <i className="navbar__icon fas fa-briefcase"></i>
                      <span>Jobs</span>
                    </div>
                    <div className="navbar__option">
                      <i className="navbar__icon fas fa-comment"></i>
                      <span>Messaging</span>
                    </div>
                    <div className="navbar__option">
                      <i className="navbar__icon fas fa-bell"></i>
                      <span>Notifications</span>
                    </div>
                    <div className="navbar__option">
                      <i className="navbar__icon fas fa-user-circle"></i>
                      <span>Me</span>
                    </div>
                  </div>
                </div>
              </nav>
            );
          };
          
         
          

          
        
           
    }

 
export default Navbar;