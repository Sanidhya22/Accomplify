export type FirebaseContext = {
  user: any;
  isLoggedIn: boolean;
  signinWithGoogle: () => void;
};
