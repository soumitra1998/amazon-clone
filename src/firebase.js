import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCP3XybSQ8qqf8TMrc9U5J0kCx2BvKpjnY",
    authDomain: "clone-ad05d.firebaseapp.com",
    projectId: "clone-ad05d",
    storageBucket: "clone-ad05d.appspot.com",
    messagingSenderId: "263355256559",
    appId: "1:263355256559:web:289dac4d8a756c2653951a",
    measurementId: "G-R5Y0YH8KF9"
  });
  //const db= firebaseApp.firestore();
  const auth=firebase.auth();
  export{auth};