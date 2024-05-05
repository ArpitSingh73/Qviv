import { auth } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";



export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
 
  const x = { user: {} };
  x.user.pic = user.user.photoURL;
  x.user.name = user.user.displayName;
  x.user.email = user.user.email;
  x.user.pnumber = user.user.providerData[0].phoneNumber;

  localStorage.setItem("userGoogle", JSON.stringify(x));
};

export const doSignOut = () => {
  return auth.signOut();
};

