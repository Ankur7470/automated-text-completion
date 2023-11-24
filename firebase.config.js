// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0bQA9xKPFvOAUTLYw47WbJCI0CVFiGZo",
  authDomain: "major-project-e3498.firebaseapp.com",
  projectId: "major-project-e3498",
  storageBucket: "major-project-e3498.appspot.com",
  messagingSenderId: "1016155592124",
  appId: "1:1016155592124:web:348763e457c919cd2487b9",
  measurementId: "G-V0RMLQY46J"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
 

// const analytics = getAnalytics(app);