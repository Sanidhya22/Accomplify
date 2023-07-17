"use client";

import { initFirebase } from "../../firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
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
  if (loading) {
    return <div>Loading</div>;
  }
  if (user) {
    router.push("/text");
    return <div>Welcome {user.displayName} </div>;
  }
  return (
    <main>
      <h1>Sign in to Continue</h1>
      <button onClick={signIn}>Sign in</button>
    </main>
  );
}
