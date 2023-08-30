// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_uxUc1BdWPP5eeYIiLweNevHJnjVJ_hQ",
  authDomain: "tacotta-testing.firebaseapp.com",
  projectId: "tacotta-testing",
  storageBucket: "tacotta-testing.appspot.com",
  messagingSenderId: "832685257791",
  appId: "1:832685257791:web:a1dd9c1b688cb2c7e7748a",
  measurementId: "G-9R31YVQX2P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
