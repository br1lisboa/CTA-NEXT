// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPRZfYT7mSb39ILg_uEJ0OuRLkloylvcU",
  authDomain: "cta-chaco.firebaseapp.com",
  projectId: "cta-chaco",
  storageBucket: "cta-chaco.appspot.com",
  messagingSenderId: "936873489308",
  appId: "1:936873489308:web:33ccdc7c3dfb55c1edce59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)