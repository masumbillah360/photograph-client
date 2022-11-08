import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import { app } from "../../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
console.log(auth);
const AuthProvider = ({ children }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const user = { name: "Masum", email: "masum@gm.com" };
  const authInfo = { user, googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
