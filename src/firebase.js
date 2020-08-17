import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHUo66f3R8cJY8GV0i8rkSYc7E1cuCP4c",
    authDomain: "instagram-clone-4abf7.firebaseapp.com",
    databaseURL: "https://instagram-clone-4abf7.firebaseio.com",
    projectId: "instagram-clone-4abf7",
    storageBucket: "instagram-clone-4abf7.appspot.com",
    messagingSenderId: "179615643181",
    appId: "1:179615643181:web:1311083325c549edab6aa4",
    measurementId: "G-44ZW579PVM"  
}); 

  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth(); 
  const storage = firebaseApp.storage(); 

  export { db, auth, storage}; 
