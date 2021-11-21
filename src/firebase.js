// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsQjBou0sLd7Q1C0f4grpnKM8pW_83AIo",
  authDomain: "qmanagement-54886.firebaseapp.com",
  projectId: "qmanagement-54886",
  storageBucket: "qmanagement-54886.appspot.com",
  messagingSenderId: "361025519457",
  appId: "1:361025519457:web:c953a5104f54f5afe24f20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function logout() {
  return signOut(auth);
}

export function passwordRecovery(email) {
    console.log(`Trying to send email to -> ${email}`);
    return sendPasswordResetEmail(auth,email);
}

export function signUp(email, password) {
  console.log(`Trying to signUp user -> ${email}`);

  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  console.log(`Trying to log in the user -> ${email}`);

  return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
