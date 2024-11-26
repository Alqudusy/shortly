import React, { useState } from "react";
import Cookies from "js-cookie";
import { createShortUrl } from "./Api"; // Import the API client
import SaveUrlToFireStore from "./SaveUrlToFireStore"; // Import Firestore save function

const UrlInputForm = () => {
    const [urlInput, setUrlInput] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate URL input
        if (!urlInput) {
            setError("Please enter a URL.");
            return;
        }
        const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if (!urlPattern.test(urlInput)) {
            setError("Please enter a valid URL.");
            return;
        }
        setError("");

        // Get user ID from cookies
        const userId = Cookies.get("userToken");
        if (!userId) {
            setError("User ID not found. Please log in.");
            return;
        }

        try {
            setLoading(true);

            // Generate the short URL
            const newUrl = await createShortUrl(urlInput);

            // Construct the full short URL
            const fullShortUrl = `https://shortly-ten.vercel.app/?shortId=${newUrl.shortId}`;

            // Save to Firestore
            await SaveUrlToFireStore(userId, { realUrl: urlInput, shortUrl: fullShortUrl });

            console.log("URL shortened and saved successfully!");
            setUrlInput("");// Reset input field
            window.location.href = window.location.href;
        } catch (err) {
            alert(err);
            setError(err.message || "An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="url-input-form" onSubmit={handleSubmit}>
            <input
                placeholder="Shorten a link here..."
                type="text"
                name="url"
                className="url-input-field"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? "Shortening..." : "Shorten it"}
            </button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default UrlInputForm;
