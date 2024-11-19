const UrlInputForm = () => {
    return (
        <form className="url-input-form">
            <input type="text" name="url" className="url-input-field" />
            <button type="submit">Shorten it!</button>
        </form>
    )
}

export default UrlInputForm;