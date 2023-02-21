// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDji8f5mAN5sdcmU1_QOnoUIO9uG9B1ay8",
  authDomain: "whatsapp-7547d.firebaseapp.com",
  projectId: "whatsapp-7547d",
  storageBucket: "whatsapp-7547d.appspot.com",
  messagingSenderId: "445143331345",
  appId: "1:445143331345:web:9ab206502893153c61b7b0",
  measurementId: "G-LS8DLLNJX9",
};

// Initialize Firebase

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

export default app;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
