// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY_5qMFOu0THhhRKZ3fyTRca1myDqhcxY",
  authDomain: "cse-client-side.firebaseapp.com",
  projectId: "cse-client-side",
  storageBucket: "cse-client-side.appspot.com",
  messagingSenderId: "997715394801",
  appId: "1:997715394801:web:1939dbde79107195d8e950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app