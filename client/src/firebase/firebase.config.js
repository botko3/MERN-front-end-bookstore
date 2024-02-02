// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ4tgQ7c_i8TMIziB_m1nPw_g9cVnERFA",
  authDomain: "mern-book-inventory-7577e.firebaseapp.com",
  projectId: "mern-book-inventory-7577e",
  storageBucket: "mern-book-inventory-7577e.appspot.com",
  messagingSenderId: "89402653654",
  appId: "1:89402653654:web:e393cce51361b7990a4277",
  measurementId: "G-63R99LD2HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;