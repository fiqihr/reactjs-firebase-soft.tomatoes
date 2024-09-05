// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBBruDAYnXN2lT9qrizWCnM5qj0sQV7lQ",
  authDomain: "reactjs-firebase-1f212.firebaseapp.com",
  databaseURL:
    "https://reactjs-firebase-1f212-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "reactjs-firebase-1f212",
  storageBucket: "reactjs-firebase-1f212.appspot.com",
  messagingSenderId: "526131017886",
  appId: "1:526131017886:web:f94855a2b5d1f059de638f",
  measurementId: "G-36TEC2DZCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
