
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOp3JNpwAOhCP_jRY8rVyJ810dLVd-T28",
  authDomain: "shortly-ecaaf.firebaseapp.com",
  projectId: "shortly-ecaaf",
  storageBucket: "shortly-ecaaf.firebasestorage.app",
  messagingSenderId: "240781195210",
  appId: "1:240781195210:web:bdde796e555e571c2bc133",
  measurementId: "G-GBQXXSM0MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };