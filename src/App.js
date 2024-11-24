import React, { useEffect, useState } from "react";
import MainSecton from './MainSection';
import UrlInputForm from './UrlInputForm';
import StatisticalSection from './StatisticalSection';
import BoostYourLinkSection from './BoostLinkSection';
import FooterSection from './FooterSection';
import LinkContainer from './LinkContainer';
import Cookies from "js-cookie";
import './styles.css';
import HandleSignUp from "./HandleSignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const loggedIn = Cookies.get("LoggedIn") === "true"; // Correct cookie name and conversion
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []); // Runs once when the component mounts

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shortId = params.get("shortId");

    if (shortId) {
      setIsRedirecting(true);
      fetch(`https://short-xish.onrender.com/api/url/${shortId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch destination URL");
          }
          return response.json();
        })
        .then((data) => {
          const destination = data.destination;
          console.log(destination);
          window.location.href = destination;
        })
        .catch((error) => {
          console.error("Error:", error.message);
          setIsRedirecting(false);
        });
    }
  }, []);

  if (isRedirecting) {
    return <div>Redirecting...</div>;
  }

  if (isLoggedIn) {
    return (
      <div className="App">
        <MainSecton />
        <UrlInputForm />
        <LinkContainer
          real="https://www.linkedin.com/company/frontend-mentor"
          shortened="https://rel.ink/gob3X9"
        />
        <StatisticalSection />
        <BoostYourLinkSection />
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="App">
      <HandleSignUp />
    </div>
  );
}

export default App;
