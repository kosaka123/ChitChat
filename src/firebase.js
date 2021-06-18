import firebase from "firebase";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBGQE6bWtcICnNcNaDBZ6eHqG5Xrqd16l0",
    authDomain: "chit-chat-31a6e.firebaseapp.com",
    projectId: "chit-chat-31a6e",
    storageBucket: "chit-chat-31a6e.appspot.com",
    messagingSenderId: "787239689844",
    appId: "1:787239689844:web:a8d8b7a4dad8874dc6fb21",
    measurementId: "G-N8L1LX9PC2",
  })
  .auth();
