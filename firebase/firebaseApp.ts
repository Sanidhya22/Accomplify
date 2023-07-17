// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqBTud1WZdcEbPmj5ei8YR_HAOf9Lvt7o",
  authDomain: "progresspal-44e9c.firebaseapp.com",
  projectId: "progresspal-44e9c",
  storageBucket: "progresspal-44e9c.appspot.com",
  messagingSenderId: "522803327385",
  appId: "1:522803327385:web:a3354dab2ae810d7a7e308",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
  return app;
};
