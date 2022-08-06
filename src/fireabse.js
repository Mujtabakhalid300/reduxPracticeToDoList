import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJJHZq0e_VBRBiFduX2lQfrw8li8UoNiY",
  authDomain: "to-do-list-app-fca46.firebaseapp.com",
  projectId: "to-do-list-app-fca46",
  storageBucket: "to-do-list-app-fca46.appspot.com",
  messagingSenderId: "628016842488",
  appId: "1:628016842488:web:ae7748b524eecd6ac55d0d",
  measurementId: "G-LQ3S9PB2GZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
