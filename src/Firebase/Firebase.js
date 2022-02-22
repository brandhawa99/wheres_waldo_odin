
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
// Your web app's Firebase configuration
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

const addStuff = async() =>{
  try {
    const docRef = await addDoc(collection(db,'users'),{
      first: 'baltej',
      last:'randahwa',
      born: '1999'
    });
    console.log("Document written with ID", docRef.id);
    
  } catch (error) {
    console.error("error adding document:",error);
    
  }
}

export default addStuff;
