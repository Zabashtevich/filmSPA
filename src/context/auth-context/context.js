import React, { createContext } from "react";
import { useFirebaseContext } from "..";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const { firebase } = useFirebaseContext();
  console.log(firebase);
  function login({ email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async function loadUserAvatar(file) {
    if (!file) {
      return new Promise((resolve) => resolve(null));
    }

    const ref = firebase.storage().ref();
    const fileRef = ref.child(file.name);
    fileRef.put(file);
    return fileRef.getDownloadURL();
  }

  async function signup({ password, email, name, url = null }) {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    return firebase
      .auth()
      .currentUser.updateProfile({ displayName: name, photoURL: url });
  }

  return (
    <AuthContext.Provider value={{ login, loadUserAvatar, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
