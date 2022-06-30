// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA17jZFLNxev3eTCbzkZFHKP6Gegp73R94",
    authDomain: "twitter-clone-294b8.firebaseapp.com",
    projectId: "twitter-clone-294b8",
    storageBucket: "twitter-clone-294b8.appspot.com",
    messagingSenderId: "573085364839",
    appId: "1:573085364839:web:17d40f8fc9241ae05f5ac2",
    measurementId: "G-ED0VFPD8X2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;