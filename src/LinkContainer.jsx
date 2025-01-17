// Import the React library
import React from "react";

// Define the LinkContainer component that takes in two props: real and shortened
const LinkContainer = ({ real, shortened }) => {
    // Define a function to ensure the URL starts with "http://" or "https://"
    const formatUrl = (url) => {
        // If the URL does not start with "http://" or "https://", prepend "https://"
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return `https://${url}`;
        }
        // Return the URL as is if it already starts with "http://" or "https://"
        return url;
    };

    // Define a function to copy the shortened URL to the clipboard
    const copyToClipboard = (text) => {
        // Use the clipboard API to write the text to the clipboard
        navigator.clipboard.writeText(text)
            .then(() => {
                // Alert the user that the URL has been copied
                alert("Shortened URL copied to clipboard!");
            })
            .catch((error) => {
                // Log an error message if the copy operation fails
                console.error("Failed to copy text:", error);
            });
    };

    // Return the JSX to render the component
    return (
        <div className="link-container">
            <div className="real-url">
                <a
                    // Set the href attribute to the formatted real URL
                    href={formatUrl(real)}
                    // Open the link in a new tab
                    target="_blank"
                    // Ensure security by preventing the new page from accessing the original page
                    rel="noopener noreferrer"
                    // Apply inline styles to the link
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}
                >
                    {/* Display the real URL */}
                    {real}
                </a>
            </div>
            <div className="shortened-link-and-button">
                <p>
                    <a
                        // Set the href attribute to the formatted shortened URL
                        href={formatUrl(shortened)}
                        // Open the link in a new tab
                        target="_blank"
                        // Ensure security by preventing the new page from accessing the original page
                        rel="noopener noreferrer"
                        // Apply inline styles to the link
                        style={{
                            textDecoration: "none",
                            color: "#2BD0D0",
                        }}
                    >
                        {/* Display the shortened URL */}
                        {shortened}
                    </a>
                </p>
                <button 
                    // Add a class to the button for styling
                    className="copy-button" 
                    // Set the onClick event to copy the shortened URL to the clipboard
                    onClick={() => copyToClipboard(shortened)}
                >
                    {/* Display the button text */}
                    Copy
                </button>
            </div>
        </div>
    );
};

// Export the LinkContainer component as the default export
export default LinkContainer;
