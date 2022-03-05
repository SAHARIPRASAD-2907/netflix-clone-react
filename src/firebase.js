// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkWo6s8vQb0hV7U5uAoUiBve7tiB4p3pE",
  authDomain: "netflix-clone-reactjs-e0cc3.firebaseapp.com",
  projectId: "netflix-clone-reactjs-e0cc3",
  storageBucket: "netflix-clone-reactjs-e0cc3.appspot.com",
  messagingSenderId: "510389652183",
  appId: "1:510389652183:web:1e59156ed2c9acf082be92",
  measurementId: "G-EFQ9T93NVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);