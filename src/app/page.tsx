"use client";

import { useContext } from "react";
import { FirebaseProvider, useFirebase } from "../../firebase/firebaseApp";
import { log } from "console";

export default function Home() {
  // const addDB = async () => {
  //   // Add a new document in collection "cities"
  //   await setDoc(doc(firestoreDB, "cities", "LA"), {
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA",
  //   });
  // };s
  const t = useFirebase();
  console.log(t);

  return (
    <main>
      {t?.user?.displayName ? (
        <h1>Hello {t.user.displayName}</h1>
      ) : (
        <button onClick={t?.signinWithGoogle}>Sign in</button>
      )}
    </main>
  );
}
