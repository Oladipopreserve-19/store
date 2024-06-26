// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQj_Gn6SyOEZ71ZebHlTMniQmwUkLV3ZU",
  authDomain: "ecommerceyt-d49da.firebaseapp.com",
  projectId: "ecommerceyt-d49da",
  storageBucket: "ecommerceyt-d49da.appspot.com",
  messagingSenderId: "460524431000",
  appId: "1:460524431000:web:786cec01723faaf21b92ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
