// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOlQQWA894NX6UWWCnX6uvOVTTNmhYM6U",
  authDomain: "email-password-auth-80d0f.firebaseapp.com",
  projectId: "email-password-auth-80d0f",
  storageBucket: "email-password-auth-80d0f.appspot.com",
  messagingSenderId: "782320352597",
  appId: "1:782320352597:web:1de7600115fec7c5b743dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;