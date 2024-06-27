// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKK0JdBOdznR27AO2XearshyketJnax-Y",
  authDomain: "jobonboard-7edcd.firebaseapp.com",
  projectId: "jobonboard-7edcd",
  storageBucket: "jobonboard-7edcd.appspot.com",
  messagingSenderId: "1038799550595",
  appId: "1:1038799550595:web:fd48bb12d937a4eb17c3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};