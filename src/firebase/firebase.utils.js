import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBiRGPdjQ82N4msK3-pIeZnda1ESaH8Vo",
  authDomain: "dev-clothing.firebaseapp.com",
  databaseURL: "https://dev-clothing.firebaseio.com",
  projectId: "dev-clothing",
  storageBucket: "dev-clothing.appspot.com",
  messagingSenderId: "1006702361871",
  appId: "1:1006702361871:web:a77d71f2095956abccd27a",
  measurementId: "G-SDYL0DCG1C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
