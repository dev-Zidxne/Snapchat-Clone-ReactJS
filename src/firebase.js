import firebase from "firebase/compat/app"; //v9
import "firebase/compat/auth"; //v9

import "firebase/compat/firestore";
import { getStorage, ref } from "firebase/storage";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPzbZEJDzuq7n4mPP2eSds6zc5qO0H-XY",
  authDomain: "snapchat-clone-6ae41.firebaseapp.com",
  projectId: "snapchat-clone-6ae41",
  storageBucket: "snapchat-clone-6ae41.appspot.com",
  messagingSenderId: "267818119083",
  appId: "1:267818119083:web:50bf28dafeb8020fb0ecee",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
// const storage = getStorage(firebaseApp);
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
