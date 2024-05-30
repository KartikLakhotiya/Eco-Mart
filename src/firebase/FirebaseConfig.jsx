import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_SECURE_API_KEY,
  authDomain: "eco-mart-f9671.firebaseapp.com",
  projectId: "eco-mart-f9671",
  storageBucket: "eco-mart-f9671.appspot.com",
  messagingSenderId: "609444597631",
  appId: "1:609444597631:web:f98cdb3b78c5fa1410544a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth, firestore };
