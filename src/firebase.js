import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmK1Ac_yh7SKk4UAdRdMwLLnIty6IlJpo",
  authDomain: "e-store-f8f5b.firebaseapp.com",
  projectId: "e-store-f8f5b",
  storageBucket: "e-store-f8f5b.appspot.com",
  messagingSenderId: "760456621304",
  appId: "1:760456621304:web:e158350be05f35a3c2df0d",
  measurementId: "G-LP8X5Z4Z21",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
 const auth = firebase.auth();

export { db, auth };
