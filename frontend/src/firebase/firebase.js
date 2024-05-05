// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_google_api_key,
  authDomain: REACT_APP_google_auth_doamin,
  projectId: REACT_APP_google_project_id,
  storageBucket: REACT_APP_google_storage_bucket,
  messagingSenderId: process.env.REACT_APP_google_message_sender_id,
  appId: process.env.REACT_APP_google_auth_domain,
  measurementId: process.env.REACT_APP_google_measurement_id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
