import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFodXesHO8dW7NpSz5PYORJgUut9tfoxM",
  authDomain: "disney-hotstar-e6e94.firebaseapp.com",
  projectId: "disney-hotstar-e6e94",
  storageBucket: "disney-hotstar-e6e94.appspot.com",
  messagingSenderId: "135179722831",
  appId: "1:135179722831:web:76d20a27fc87b6a9848a3a",
  measurementId: "G-KK1D6BCHNP",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;
