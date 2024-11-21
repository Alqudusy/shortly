const MobileNavBar = ({ isNavOpen }) => {
    return (
    <div className={`mobile-nav-bar ${isNavOpen ? "open" : "closed"}`}
    style={{transform:isNavOpen ? "translateX(0)": "translateY(-120%)", transition: "transform 0.3s ease-in-out",}}
    >
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
    );
}
export default MobileNavBar;