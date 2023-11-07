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
  appId: "1:471548655670:web:4d5ccc16cf1cff15b24097",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
