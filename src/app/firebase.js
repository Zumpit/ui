import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfpwWREDlcJLH-5JwaRxt74AWft_ntWQA",
  authDomain: "onelab-78013.firebaseapp.com",
  projectId: "onelab-78013",
  storageBucket: "onelab-78013.appspot.com",
  messagingSenderId: "1071973600975",
  appId: "1:1071973600975:web:aef2b0891bf477b08af1ba",
  measurementId: "G-YVB9QX8LLE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;