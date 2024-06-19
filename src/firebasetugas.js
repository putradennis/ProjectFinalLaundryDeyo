import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCS5L29NeQHwBS0Tby2V6UQy2DYugDYKNQ",
    authDomain: "rn-test-a1624.firebaseapp.com",
    projectId: "rn-test-a1624",
    storageBucket: "rn-test-a1624.appspot.com",
    messagingSenderId: "856895172990",
    appId: "1:856895172990:web:d9219b2c37d3df1861432f",
    measurementId: "G-JM8WKJLJ5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}