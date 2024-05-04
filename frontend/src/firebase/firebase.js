// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC28bQKYt7utqFMFrQvuPaJo4PkY0Qcvjw",
  authDomain: "qviv-8aafe.firebaseapp.com",
  projectId: "qviv-8aafe",
  storageBucket: "qviv-8aafe.appspot.com",
  messagingSenderId: "1065875189122",
  appId: "1:1065875189122:web:a950653bce61641691739b",
  measurementId: "G-GXM4785FSM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export {app, auth}
