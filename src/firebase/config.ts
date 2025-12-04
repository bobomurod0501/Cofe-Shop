// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnjBRz-9pGjkYgWE9lr--D29ITnkfrAVk",
  authDomain: "online-cofe-shop.firebaseapp.com",
  projectId: "online-cofe-shop",
  storageBucket: "online-cofe-shop.firebasestorage.app",
  messagingSenderId: "570082587776",
  appId: "1:570082587776:web:77ecd39ad609581107a265",
  measurementId: "G-NFVPKR6F8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
