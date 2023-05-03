import React, { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../utils/firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const updateUserProfile = (userName) => {
    // console.log("update name", userName);
    return updateProfile(user, {
      displayName: userName,
    });
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    loading,
    user,
    createUser,
    logOut,
    logIn,
    updateUserProfile,
    googleSignIn,
    gitHubSignIn,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;