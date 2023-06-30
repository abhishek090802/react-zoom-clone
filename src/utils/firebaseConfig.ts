// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3Ep2NIwolDYGajSULfIYqB_A4sbmQfME",
  authDomain: "zoom-clone-a777e.firebaseapp.com",
  projectId: "zoom-clone-a777e",
  storageBucket: "zoom-clone-a777e.appspot.com",
  messagingSenderId: "422337301967",
  appId: "1:422337301967:web:2582af25aa3aa25d7016ba",
  measurementId: "G-HBKT2WW8EM"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");


// more specifically link to the firebase database
// https://console.firebase.google.com/project/zoom-clone-a777e/firestore/data/~2Fmeetings~2Fmu7WBET8XtvTwpKvXpWm