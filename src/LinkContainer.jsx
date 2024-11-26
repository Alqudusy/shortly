const LinkContainer = ({ real, shortened }) => {
    // Ensure the URL starts with "http://" or "https://"
    const formatUrl = (url) => {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return `https://${url}`;
        }
        return url;
    };

    return (
        <div className="link-container">
            <div className="real-url">
                <a
                    href={formatUrl(real)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}
                >
                    {real}
                </a>
            </div>
            <div className="shortened-link-and-button">
                <p>
                    <a
                        href={formatUrl(shortened)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "#2BD0D0",
                        }}
                    >
                        {shortened}
                    </a>
                </p>
                <button className="copy-button">Copy</button>
            </div>
        </div>
    );
};

export default LinkContainer;
