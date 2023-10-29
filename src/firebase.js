// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC8f106nogM99hPlcEYH3f3p9vjM966mQ",
  authDomain: "realtor-clone-react-8d4a4.firebaseapp.com",
  projectId: "realtor-clone-react-8d4a4",
  storageBucket: "realtor-clone-react-8d4a4.appspot.com",
  messagingSenderId: "845014987685",
  appId: "1:845014987685:web:af4c183eb79f2217f72e4c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()