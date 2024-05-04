// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "mern-task-manager-87240.firebaseapp.com",
  projectId: "mern-task-manager-87240",
  storageBucket: "mern-task-manager-87240.appspot.com",
  messagingSenderId: "881767583485",
  appId: "1:881767583485:web:c0fb019b81422040d07894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);