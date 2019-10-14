import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCzz0Np9KZWWGKnJ5HpMV7zjST1lO6rczU",
  authDomain: "crwn-db-81fea.firebaseapp.com",
  databaseURL: "https://crwn-db-81fea.firebaseio.com",
  projectId: "crwn-db-81fea",
  storageBucket: "crwn-db-81fea.appspot.com",
  messagingSenderId: "547177757545",
  appId: "1:547177757545:web:894c9c0e5a202033"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
