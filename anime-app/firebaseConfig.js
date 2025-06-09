import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz2lAANOvxAHiAtNYqMu7Lpt4QMBxGgBI",
  authDomain: "animeapp-c0437.firebaseapp.com",
  projectId: "animeapp-c0437",
  storageBucket: "animeapp-c0437.firebasestorage.app",
  messagingSenderId: "1027157461936",
  appId: "1:1027157461936:web:955ce8e1ecc510d21d6475",
  measurementId: "G-3631VLY49X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};