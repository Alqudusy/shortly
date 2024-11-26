import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore

// Your web app's Firebase configuration
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

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);  // Initialize Firestore

export { auth, db };  // Export Firestore instance for use in your app
