import firebase from "firebase/app";
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyCc4aIo-TMoYSPqsmI0wollo2XQgg7A9A8",
  authDomain: "task-tracker-ts.firebaseapp.com",
  projectId: "task-tracker-ts",
  storageBucket: "task-tracker-ts.appspot.com",
  messagingSenderId: "139164433759",
  appId: "1:139164433759:web:d86c2d60fbb322ccac4aea",
  measurementId: "G-9L8X2T6W17",
};
firebase.initializeApp(config);

export default firebase;
