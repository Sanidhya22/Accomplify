"use client";

import { firestoreDB, initFirebase } from "../../firebase/firebaseApp";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
export default function Home() {
  const router = useRouter();
  const app = initFirebase();
  console.log(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  const [user, loading] = useAuthState(auth);
  // if (loading) {
  //   return <div>Loading</div>;
  // }
  // if (user) {
  //   return <div>Welcome {user.displayName} </div>;
  // }
  const addDB = async () => {
    // Add a new document in collection "cities"
    await setDoc(doc(firestoreDB, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };
  return (
    <main>
      {user ? (
        <h1>Hello {user.displayName}</h1>
      ) : (
        <button onClick={signIn}>Sign in</button>
      )}
      {/* <button onClick={addDB}>Add DB</button> */}
    </main>
  );
}
