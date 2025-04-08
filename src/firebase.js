// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuXlA0R0KfiRUF-1KvIeGoTaUZQzl2ciI",
  authDomain: "meatify-login-signup.firebaseapp.com",
  projectId: "meatify-login-signup",
  storageBucket: "meatify-login-signup.firebasestorage.app",
  messagingSenderId: "450759934025",
  appId: "1:450759934025:web:be4158e20bc57f55b93f98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)