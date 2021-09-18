import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOWYccnNM6oRZ1_BKzDOz_XG5MbzEfbhg",
    authDomain: "testapp-4bffc.firebaseapp.com",
    projectId: "testapp-4bffc",
    storageBucket: "testapp-4bffc.appspot.com",
    messagingSenderId: "597967072065",
    appId: "1:597967072065:web:cdb981b9d4f0d113110fc0",
    measurementId: "G-TSRZELK1PN"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }