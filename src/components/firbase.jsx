import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsdNtcTn6c66Tha3HE7gx6XgOi71jbEFo",
  authDomain: "my-project-1572450015404.firebaseapp.com",
  databaseURL: "https://my-project-1572450015404.firebaseio.com",
  projectId: "my-project-1572450015404",
  storageBucket: "my-project-1572450015404.appspot.com",
  messagingSenderId: "416724970761",
  appId: "1:416724970761:web:c6479024e14a33d295b7d8",
  measurementId: "G-6B8EDKTKGT",
});
var db = firebaseApp.firestore();
var myAuth = firebaseApp.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { db, myAuth, provider };
