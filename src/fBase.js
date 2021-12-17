// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJdzORmUkP0kJ6FUyDV1ANuxsD782lio4",
  authDomain: "login-2ad56.firebaseapp.com",
  projectId: "login-2ad56",
  storageBucket: "login-2ad56.appspot.com",
  messagingSenderId: "1025439441520",
  appId: "1:1025439441520:web:bc6c4644d0461f299a0ab5",
  measurementId: "G-ZYYX9BBH7M",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
