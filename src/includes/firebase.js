import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNXDtauHPoL_B4pK_EM4HQMJDpI7EYVD0",
  authDomain: "lofitask-6b91d.firebaseapp.com",
  projectId: "lofitask-6b91d",
  storageBucket: "lofitask-6b91d.appspot.com",
  messagingSenderId: "286278953993",
  appId: "1:286278953993:web:fbc24a371d8dfdbb17dcd8",
  measurementId: "G-KGRWCFJHDF",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
