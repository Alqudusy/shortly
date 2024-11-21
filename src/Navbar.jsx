import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import HamburgerIcon from "./HamburgerIcon";
const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prevState => !prevState);
    }


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
            <HamburgerIcon toggleNav={toggleNav} />
            <MobileNavBar isNavOpen={isNavOpen} />
        </div>
    );
}

export default NavBar;