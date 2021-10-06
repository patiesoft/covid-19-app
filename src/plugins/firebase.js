import firebase from "firebase/app";

//Import needed firebase modules
import "firebase/auth";
import "firebase/firestore";

// Firebase app config

const firebaseConfig = {
  apiKey: "AIzaSyAmoCP1PvJ6EydEatOz-HPj2rl38bw5vEA",
  authDomain: "regional-qr-code-health-system.firebaseapp.com",
  projectId: "regional-qr-code-health-system",
  storageBucket: "regional-qr-code-health-system.appspot.com",
  messagingSenderId: "596324947504",
  appId: "1:596324947504:web:b50c70e258588f36407ff5"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Emulator connection
// if (location.hostname === "localhost") {
//   db.settings({
//     host: "localhost:9095",
//     ssl: false
//   });
//   Functions.useFunctionsEmulator("http://localhost:8085");
//   auth.useEmulator("http://localhost:9037");
// }

const userCollection = db.collection("Users");
var FieldValue = firebase.firestore.FieldValue;
const AUTH = firebase.auth;
const Timestamp = firebase.firestore.Timestamp;

export { auth,firebase, db, userCollection, FieldValue, Timestamp, AUTH };
