import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import Cookies from "js-cookie";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Set cookies
      Cookies.set("userToken", userCredential.user.uid, { expires: 7 });
      Cookies.set("userEmail", userCredential.user.email, { expires: 7 });
      Cookies.set("LoggedIn", true, { expires: 7 });

      setSuccess("Sign up successful! Redirecting...");
      setTimeout(() => window.location.reload(), 2000); // Reload after 2 seconds
    } catch (error) {
      setError(error.message || "An error occurred during sign up.");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Set cookies
      Cookies.set("userToken", userCredential.user.uid, { expires: 7 });
      Cookies.set("userEmail", userCredential.user.email, { expires: 7 });
      Cookies.set("LoggedIn", true, { expires: 7 });

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => window.location.reload(), 2000); // Reload after 2 seconds
    } catch (error) {
      setError(error.message || "An error occurred during login.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Log In"} to Your Account</h2>
      <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="auth-form">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
      <p className="toggle-form">
        {isSignUp ? (
          <>Already have an account? <span onClick={() => setIsSignUp(false)} className="link">Log In</span></>
        ) : (
          <>Don't have an account? <span onClick={() => setIsSignUp(true)} className="link">Sign Up</span></>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
