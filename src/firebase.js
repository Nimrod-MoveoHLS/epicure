import firebase from "firebase"

const config = {
    apiKey: "AIzaSyAmCn-kpDErfZ4M5iOysQCH81cuvivwvFY",
    authDomain: "epicure-firestore.firebaseapp.com",
    databaseURL: "https://epicure-firestore-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "epicure-firestore",
    storageBucket: "epicure-firestore.appspot.com",
    messagingSenderId: "487415923981",
    appId: "1:487415923981:web:1a191a8602e2541eaf9c44"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  export default firebase