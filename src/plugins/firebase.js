import firebase from "firebase/app";

//Import needed firebase modules
import "firebase/auth";
import "firebase/firestore";

// Firebase app config

let firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
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

export { auth, db, userCollection, FieldValue, Timestamp, AUTH };
