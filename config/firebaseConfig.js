// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoFiYTGuYO1h_ndamdujlfh4SZDkln_Wk",
  authDomain: "project-1-bc972.firebaseapp.com",
  projectId: "project-1-bc972",
  storageBucket: "project-1-bc972.firebasestorage.app",
  messagingSenderId: "1009173883797",
  appId: "1:1009173883797:web:7ff486204dfdd49d89e49c",
  measurementId: "G-7220KHV3BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export {app, db}; // Export both the Firebase App and Firestore instance
