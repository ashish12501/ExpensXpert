// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9u0VAjqfMNwwM1QAM_1GHthgU6ga1AFA",
    authDomain: "expensxpert.firebaseapp.com",
    projectId: "expensxpert",
    storageBucket: "expensxpert.appspot.com",
    messagingSenderId: "970299337452",
    appId: "1:970299337452:web:999f54b8c7c13c2c1413c9",
    measurementId: "G-W1P3F18KLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();

// const analytics = getAnalytics(app);