// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkobVLEZ4MeL6J2a_-f4QDiB5Ie_bQ99M",
  authDomain: "kofe-shop.firebaseapp.com",
  projectId: "kofe-shop",
  storageBucket: "kofe-shop.firebasestorage.app",
  messagingSenderId: "1003489565292",
  appId: "1:1003489565292:web:855dabb74eb56ee6f11649",
  measurementId: "G-HC909GM78Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);
