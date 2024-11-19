import React from "react";
const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-and-links">
              <h2 className="logo">Shortly</h2>
              <ul className="nav-links">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Resources</li>
              </ul>
            </div>
            <div className="sign-in-out">
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </div>
            <i className="fa-solid fa-bars"></i>
            <div className="mobile-nav-bar">
                <ul className="mobile-nav-links">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                </ul>
                <div>
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;