import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
console.log(typeof process.env.REACT_APIKEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APIKEY,
  authDomain: process.env.REACT_AUTHDOMAIN,
  projectId: "bestfamilymediaapp",
  storageBucket: process.env.REACT_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_MESSAGINGSENDERID,
  appId: process.env.REACT_APPID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
