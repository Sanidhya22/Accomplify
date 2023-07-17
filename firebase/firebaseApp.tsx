"use client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseContext } from "@/types/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
type tets = {
  user: string;
};
const FirebaseContext = createContext<FirebaseContext | null>(null);
export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<any>(null);

  const signinWithGoogle = async () =>
    await signInWithPopup(firebaseAuth, googleProvider);

  useLayoutEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider value={{ user, isLoggedIn, signinWithGoogle }}>
      {children}
    </FirebaseContext.Provider>
  );
};
