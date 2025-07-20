// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCm0jwhBHb7zBsBz8F0KW3jNoCxyM10eE",
  authDomain: "photofolio-df728.firebaseapp.com",
  projectId: "photofolio-df728",
  storageBucket: "photofolio-df728.firebasestorage.app",
  messagingSenderId: "785808592400",
  appId: "1:785808592400:web:7b852003db00468e4bc495",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };
