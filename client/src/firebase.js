// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5c992.firebaseapp.com",
  projectId: "mern-estate-5c992",
  storageBucket: "mern-estate-5c992.appspot.com",
  messagingSenderId: "471548655670",
  appId: "1:471548655670:web:64e3078459da4701b24097",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
