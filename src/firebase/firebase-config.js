import  firebase from "firebase/app";

import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2UlxRZLXpfKDKD4WulGIyUOj35e9mlKs",
    authDomain: "journal-app-3e58a.firebaseapp.com",
    projectId: "journal-app-3e58a",
    storageBucket: "journal-app-3e58a.appspot.com",
    messagingSenderId: "204875103064",
    appId: "1:204875103064:web:82fbdbb272f590596f432d"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    app,
    firebase
}