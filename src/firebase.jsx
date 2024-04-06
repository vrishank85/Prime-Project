// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASerT7AVniDIENK88uEOQWHYPr4Dd_BQ8",
  authDomain: "prime-clone-react.firebaseapp.com",
  projectId: "prime-clone-react",
  storageBucket: "prime-clone-react.appspot.com",
  messagingSenderId: "385609936697",
  appId: "1:385609936697:web:5ca2f86034317f414c02e8",
  measurementId: "G-E4RNBBS237"
};
            


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)