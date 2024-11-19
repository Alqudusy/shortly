const LinkContainer = (props) => {
    return (
        <div className="link-container">
            <div className="real-url">{props.real}</div>
            <div className="shortened-link-and-button">
                <p>{props.shortened}</p>
                <button className="copy-button">Copy</button>
            </div>
        </div>
    );
}

export default LinkContainer;