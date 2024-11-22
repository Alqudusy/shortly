import React, { useEffect, useState } from "react";
import MainSecton from './MainSection';
import UrlInputForm from './UrlInputForm';
import StatisticalSection from './StatisticalSection';
import BoostYourLinkSection from './BoostLinkSection';
import FooterSection from './FooterSection';
import LinkContainer from './LinkContainer';
import './styles.css';

function App() {
  // Define the base URL and destination URL
const baseUrl = "https://short-xish.onrender.com/api/url";
const destinationUrl = "https://www.facebook.com";

// Make a POST request to get the short ID
fetch(baseUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ destination: destinationUrl }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create short URL");
    }
    return response.json(); // Parse JSON response
  })
  .then((data) => {
    console.log("Short ID:", data.newUrl.shortId);
    console.log("Full Shortened URL:", `https://short-xish.onrender.com/${data.newUrl.shortId}`);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

  const [isRedirecting, setIsRedirecting] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shortId = params.get("shortId");

    if (shortId) {
      setIsRedirecting(true);
      fetch(`https://short-xish.onrender.com/api/url/${shortId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch destination URL");
          }
          return response.json();
        })
        .then(data => {
          const destination = data.destination;
          console.log(destination)
          window.location.href = destination;
        })
        .catch(error => {
          console.error("Error:", error.message);
          setIsRedirecting(false);
        })
    }
  }, []);
  if (isRedirecting) {
    return <div>Redirecting</div>
  }
  return (
    <div className="App">
      <MainSecton />
      <UrlInputForm />
      <LinkContainer real="https://www.linkedin.com/company/frontend-mentor" shortened="https://rel.ink/gob3X9" />
      <LinkContainer real="https://www.linkedin.com/company/frontend-mentor" shortened="https://rel.ink/gob3X9" />
      <LinkContainer real="https://www.linkedin.com/company/frontend-mentor" shortened="https://rel.ink/gob3X9" />
      <StatisticalSection />
      <BoostYourLinkSection />
      <FooterSection />
    </div>
  );
}

export default App;
