// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrcldobNpCRhCQ6IoHM9YJcX5wEmw_MLs",
  authDomain: "codepen-clone-9a031.firebaseapp.com",
  projectId: "codepen-clone-9a031",
  storageBucket: "codepen-clone-9a031.appspot.com",
  messagingSenderId: "7042618457",
  appId: "1:7042618457:web:34f1de80d82a133d82cd48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);