// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const firebaseapp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseapp);



export  {auth};