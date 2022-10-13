import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4m1cHNz9gH10Y-hg4sgUxrjmUDJl_9QE",
  authDomain: "store-a4957.firebaseapp.com",
  projectId: "store-a4957",
  storageBucket: "store-a4957.appspot.com",
  messagingSenderId: "371059217710",
  appId: "1:371059217710:web:5a555879242400e44356bf",
  measurementId: "G-LJG1JWDVMN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
 const auth = firebase.auth();

export { db, auth };
