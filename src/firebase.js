// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6wyM-5La1sgW6zMZmr5c2zT35jXcCi5w",
  authDomain: "realmfly-923d3.firebaseapp.com",
  projectId: "realmfly-923d3",
  storageBucket: "realmfly-923d3.appspot.com",
  messagingSenderId: "352152615365",
  appId: "1:352152615365:web:77ffeb7f3362b50885b3ac",
  measurementId: "G-PFHZTVGRJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default {app, auth}