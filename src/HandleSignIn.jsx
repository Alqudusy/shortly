const HandleSignIn = () => {
    return(
        <form action="#">
            <input type="email" className="email" id="email" />
            <input type="password" name="password" id="password" />
            <button type="submit">Log In</button>
            <p>Did not have an account?</p>
            <p>Sign Up</p>
        </form>
    );
}
export default HandleSignIn;