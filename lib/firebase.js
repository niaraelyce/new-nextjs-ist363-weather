// lib/firebase.js

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // Your Firebase config
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;
