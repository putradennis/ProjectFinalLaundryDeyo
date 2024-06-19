import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkUDuYyZAazplNvlB5iH8Jwyme6u_2WQk",
  authDomain: "expensify-54d27.firebaseapp.com",
  projectId: "expensify-54d27",
  storageBucket: "expensify-54d27.appspot.com",
  messagingSenderId: "420592960574",
  appId: "1:420592960574:web:2662e6da28ca3fc45ffd6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}