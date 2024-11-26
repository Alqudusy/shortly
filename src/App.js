import React, { useEffect, useState } from "react";
import MainSecton from './MainSection';
import UrlInputForm from './UrlInputForm';
import StatisticalSection from './StatisticalSection';
import BoostYourLinkSection from './BoostLinkSection';
import FooterSection from './FooterSection';
import LinkContainer from './LinkContainer';
import Cookies from "js-cookie";
import './styles.css';
import AuthForm from "./AuthForm";
import GetUrlFromFireStore from "./GetUrlFromFireStore";

function App() {
  const [userUrls, setUserUrls] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const userToken = Cookies.get("userToken");

  // Fetch user URLs when the component mounts or when userToken changes
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        setIsLoading(true);
        const urls = await GetUrlFromFireStore(userToken);
        setUserUrls(urls);
      } catch (err) {
        setError("Failed to fetch URLs.");
      } finally {
        setIsLoading(false);
      }
    };

    if (userToken) {
      fetchUrls();
    }
  }, [userToken]);

  // Check if user is logged in based on the cookie
  useEffect(() => {
    const loggedIn = Cookies.get("LoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Handle redirection based on shortId in URL
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
          setTimeout(() => {
            window.location.href = destination;
          }, 1000); // Show a 1-second delay before redirecting
        })
        .catch((error) => {
          setError("Error: " + error.message);
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
        {error && <p className="error">{error}</p>}
        {userUrls.length > 0 ? (
          userUrls.map((url, index) => (
            <LinkContainer 
              key={`${url.shortUrl}-${index}`} 
              real={url.realUrl} 
              shortened={url.shortUrl} 
            />
          ))
        ) : (
          <p>No URLs saved yet. Start by adding one!</p>
        )}
        <StatisticalSection />
        <BoostYourLinkSection />
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="App">
      <AuthForm />
    </div>
  );
}

export default App;
