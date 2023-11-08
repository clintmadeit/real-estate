// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-84767.firebaseapp.com",
  projectId: "real-estate-84767",
  storageBucket: "real-estate-84767.appspot.com",
  messagingSenderId: "573582829382",
  appId: "1:573582829382:web:003d07941209ff0e95e747",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
