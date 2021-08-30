import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKIIyLskEFeMuOMQFvrL6jqfGdx3wPmyo",
  authDomain: "cchat-3a253.firebaseapp.com",
  projectId: "cchat-3a253",
  storageBucket: "cchat-3a253.appspot.com",
  messagingSenderId: "4254353380",
  appId: "1:4254353380:web:c887812695afec029ca9f1",
  measurementId: "G-HZYKRC478D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };