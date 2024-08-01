// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi0eqDzD79XAHbMyFc9Nq9x1Mh4s50Lo8",
    authDomain: "inventory-app-hs.firebaseapp.com",
    projectId: "inventory-app-hs",
    storageBucket: "inventory-app-hs.appspot.com",
    messagingSenderId: "958279572303",
    appId: "1:958279572303:web:451af0170137946b42033a",
    measurementId: "G-FJJBWS7ESB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

export { firestore };
