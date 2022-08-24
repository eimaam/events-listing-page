import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJ-kZ2SOuN5hnjlWxjrz715kmBbKDg4Uk",
  authDomain: "fire-authentication-1f8d2.firebaseapp.com",
  projectId: "fire-authentication-1f8d2",
  storageBucket: "fire-authentication-1f8d2.appspot.com",
  messagingSenderId: "684895501587",
  appId: "1:684895501587:web:3ee90679a9f95f17ca6ee6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);