// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDW3bUvPs8mH2y-CyQFie4XtwUcpuQMDko",
    authDomain: "pantry-sidekick.firebaseapp.com",
    projectId: "pantry-sidekick",
    storageBucket: "pantry-sidekick.appspot.com",
    messagingSenderId: "618345364399",
    appId: "1:618345364399:web:673715167748b5fe1e8d5a",
    measurementId: "G-TVVG3DNQ03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

export { firestore };
