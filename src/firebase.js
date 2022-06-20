import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_gzTLFkIz7hwH-X3hnmN_ZNlxQstgA64",
  authDomain: "clone-dc9b8.firebaseapp.com",
  databaseURL: "https://clone-dc9b8-default-rtdb.firebaseio.com",
  projectId: "clone-dc9b8",
  storageBucket: "clone-dc9b8.appspot.com",
  messagingSenderId: "481268665697",
  appId: "1:481268665697:web:f6cce5eeaf819481f661ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };