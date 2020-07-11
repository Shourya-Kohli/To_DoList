import firebase from "firebase";
//npm i firebase

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBD6IEHsePIKNGCcs32Av6LAKVaO4omP4c",
  authDomain: "to-do-app-99414.firebaseapp.com",
  databaseURL: "https://to-do-app-99414.firebaseio.com",
  projectId: "to-do-app-99414",
  storageBucket: "to-do-app-99414.appspot.com",
  messagingSenderId: "1024107977321",
  appId: "1:1024107977321:web:9acd1fc6e2f403979720f8",
  measurementId: "G-YE1PNTQBS0",
});

const db = firebaseApp.firestore();

export default db;
