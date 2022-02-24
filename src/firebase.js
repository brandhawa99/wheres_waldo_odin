// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: "wheres-waldo-1",
  storageBucket: "wheres-waldo-1.appspot.com",
  messagingSenderId: "328876179575",
  appId: "1:328876179575:web:acfb700a8e5fa1f1bfc672",
  measurementId: "G-K41349PY7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();