import React, { createContext } from "react";
import { useFirebaseContext } from "..";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const { firebase } = useFirebaseContext();

  function login({ email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async function loadUserAvatar(data) {
    const ref = firebase.storage().ref();
    const fileRef = ref.child(data.file.name);
    fileRef.put(data.file);
    return fileRef.getDownloadURL();
  }

  function signup({ password, email }) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  function updateUserProfile({ name, url }) {
    await firebase
    .auth()
    .currentUser.updateProfile({ displayName: name, photoURL: url });
  }

  return <AuthContext.Provider value={login, loadUserAvatar, signup, updateUserProfile}>{children}</AuthContext.Provider>;
}
