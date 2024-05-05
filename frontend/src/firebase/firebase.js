// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_google_api_key,
//   authDomain: process.env.REACT_APP_google_auth_domain,
//   projectId: process.env.REACT_APP_google_project_id,
//   storageBucket: process.env.REACT_APP_google_storage_bucket,
//   messagingSenderId: process.env.REACT_APP_google_message_sender_id,
//   appId: process.env.REACT_APP_google_auth_domain,
//   measurementId: process.env.REACT_APP_google_measurement_id,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC28bQKYt7utqFMFrQvuPaJo4PkY0Qcvjw",
//   authDomain: "qviv-8aafe.firebaseapp.com",
//   projectId: "qviv-8aafe",
//   storageBucket: "qviv-8aafe.appspot.com",
//   messagingSenderId: "1065875189122",
//   appId: "1:1065875189122:web:44c238711faa0a9491739b",
//   measurementId: "G-PF5QM0ZEGT"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_google_api_key,
  authDomain: process.env.REACT_APP_google_auth_domain,
  projectId: process.env.REACT_APP_google_project_id,
  storageBucket: process.env.REACT_APP_google_storage_bucket,
  messagingSenderId: process.env.REACT_APP_google_message_sender_id,
  appId: process.env.REACT_APP_google_app_id,
  measurementId: process.env.REACT_APP_google_measurement_id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
