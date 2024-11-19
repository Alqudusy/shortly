const UrlInputForm = () => {
    return (
        <form className="url-input-form">
            <input placeholder='Shorten a link here...' type="text" name="url" className="url-input-field" />
            <button type="submit">Shorten it</button>
        </form>
    );
}

export default UrlInputForm;