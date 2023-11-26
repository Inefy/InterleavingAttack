// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3GPPROfm8it_2UcJesqv2zD_sKo_aMLM",
  authDomain: "interleaving-attack.firebaseapp.com",
  projectId: "interleaving-attack",
  storageBucket: "interleaving-attack.appspot.com",
  messagingSenderId: "48565559745",
  appId: "1:48565559745:web:b46ad20cde0fda3dce4f40"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Firebase Realtime Database
const realtimeDb = getDatabase(firebaseApp);

export { auth, db, realtimeDb };
