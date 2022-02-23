
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection, getDoc } from 'firebase/firestore';
import {getAuth, signInAnonymously,} from 'firebase/auth';
// Your web app's Firebase configuration

const firebase = (() =>{
  const firebaseConfig = {
    apiKey: process.env.apiKEY,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  const signIn = async() =>{
    const auth = getAuth();
    try {
      await signInAnonymously(auth)
    } catch (error) {
        console.error(error);
    }
  }
  const addScore = async(obj) =>{
    try {
      const docRef = await addDoc(collection(db, "users"), obj);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }



  return{
    signIn,
    addScore,
  }


})();

export default firebase;




