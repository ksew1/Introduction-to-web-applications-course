// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKYV0uw6sonZh4IX7LCfT6R1mfU6Nxt5k",
  authDomain: "zadanie5-e184e.firebaseapp.com",
  projectId: "zadanie5-e184e",
  storageBucket: "zadanie5-e184e.appspot.com",
  messagingSenderId: "828950371900",
  appId: "1:828950371900:web:07719ecdc79b5c2c11ed39",
  measurementId: "G-P4MBZBXTRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
