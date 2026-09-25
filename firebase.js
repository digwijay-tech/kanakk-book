// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcMNwkIvHq2rlAZWJBUI1ures3-4EscA",
  authDomain: "kanakk-book.firebaseapp.com",
  projectId: "kanakk-book",
  storageBucket: "kanakk-book.firebasestorage.app",
  messagingSenderId: "615505623708",
  appId: "1:615505623708:web:deda37f49f9cdf5d060b59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);