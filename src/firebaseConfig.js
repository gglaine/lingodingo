// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC58BJFhDe0JJ_iieSsFTRjUmKaLwh9Wew",
  authDomain: "lingodingo-f715c.firebaseapp.com",
  projectId: "lingodingo-f715c",
  storageBucket: "lingodingo-f715c.appspot.com",
  messagingSenderId: "596465656291",
  appId: "1:596465656291:web:104a6f06319308882880d6",
  measurementId: "G-G1CZVX7BB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Conditionally initialize analytics
if (typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
  }
  
  export default app;