// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnCnAgY-5IGXchVDLcwDonlIvJe85qpec",
  authDomain: "note-fd623.firebaseapp.com",
  projectId: "note-fd623",
  storageBucket: "note-fd623.appspot.com",
  messagingSenderId: "409239351504",
  appId: "1:409239351504:web:1653a20434e0d5a1446ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;

