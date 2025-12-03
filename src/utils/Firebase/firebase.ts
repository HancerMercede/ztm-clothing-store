import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  type User,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import type { Error } from "../../types";

const firebaseConfig = {
  apiKey: "AIzaSyCSQ0pVW73oGgdZs8aFlS5BHk5BLmsfEys",
  authDomain: "clothing-store-5a1be.firebaseapp.com",
  projectId: "clothing-store-5a1be",
  storageBucket: "clothing-store-5a1be.firebasestorage.app",
  messagingSenderId: "297587784664",
  appId: "1:297587784664:web:c7339ee7ee53594f6290ad",
  measurementId: "G-D830T62W6X",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshop = await getDoc(userDocRef);

  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};
