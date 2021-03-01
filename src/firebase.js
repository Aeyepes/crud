import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDU7UmxqBw7q1rfdNb8--66QCINn6x5z7k",
    authDomain: "crud-cdfad.firebaseapp.com",
    projectId: "crud-cdfad",
    storageBucket: "crud-cdfad.appspot.com",
    messagingSenderId: "971775056770",
    appId: "1:971775056770:web:3f51258c8c7c5dba178d9b"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)