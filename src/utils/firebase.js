// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXI2C-wLPjEV5fowx1i-FQz5s9VPBvCkM",
  authDomain: "netflixgpt-hrithik.firebaseapp.com",
  projectId: "netflixgpt-hrithik",
  storageBucket: "netflixgpt-hrithik.appspot.com",
  messagingSenderId: "1030428528635",
  appId: "1:1030428528635:web:4125f8c31aee243a94455e",
  measurementId: "G-EFB0E0504M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
