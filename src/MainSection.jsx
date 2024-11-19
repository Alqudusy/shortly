import logo from './logo.svg';
import NavBar from './Navbar';
const MainSection = () => {
    return (
        <div className="main-section-container">
            <NavBar />
            <div className="description-container">
               <div className="descriptions">
                  <h1>More than just shorter links</h1>
                  <p>Build Your brand recognition and get detailed insights on how your links are performing</p>
                  <button className="get-started-botton">Get started</button>
                </div>
                <div className="image-div">
                   <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default MainSection;