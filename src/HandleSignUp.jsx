import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import Cookies from "js-cookie";
const HandleSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const saveInfoToFireBase = async (e) => {
      e.preventDefault();
      try {
        console.log(email);
        console.log(password);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
        console.log("User Email:", userCredential.user.email);
        console.log("User UID:", userCredential.user.uid);
  
        // Set cookies
        Cookies.set("userToken", userCredential.user.uid, { expires: 7 });
        Cookies.set("userEmail", userCredential.user.email, { expires: 7 });
        Cookies.set("LoggedIn", true, { expires: 7 });
  
        // Redirect to the home page after signing up
        window.location.reload(); // Reload to trigger the state update in the App component
      } catch (error) {
        console.error("Error Signing up:", error.message);
        setError(error.message);
        alert(`Error Signing up, please try again later`);
      }
    };
  
    return (
      <form onSubmit={saveInfoToFireBase} className="sign-up-form">
        <input
          type="email"
          name="email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please Input your Email"
          required
        />
        <input
          type="password"
          name="password"
          className="password"
          placeholder="Please Input your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        <p>Already Have an account?</p>
        <p>Sign In</p>
      </form>
    );
  };
  
  export default HandleSignUp;
  