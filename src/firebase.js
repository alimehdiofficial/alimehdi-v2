import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsEeYO4a9GvzfJcArKhnUCzCcmfFH1boQ",
  authDomain: "alimehdi-v2-9a5f9.firebaseapp.com",
  projectId: "alimehdi-v2-9a5f9",
  storageBucket: "alimehdi-v2-9a5f9.appspot.com",
  messagingSenderId: "749178829302",
  appId: "1:749178829302:web:75a10e728252d5d0616fd7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
