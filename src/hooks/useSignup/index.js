import { useState } from "react";
import { useHistory } from "react-router";
import { createUserDatafolder } from "../../utils";

export default function useSignup() {
  const [, { showErrorModal }] = useModalContext();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const history = useHistory();

  async function signup({ name, email, password, file }) {
    setLoading(true);
    if (file) await loadUserAvatar(file);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: name,
          photoURL: url,
        });
      });
    createUserDatafolder(name)
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch(() => {
        setLoading(false);
        showErrorModal("Something gone wrong");
      });
  }

  async function loadUserAvatar(file) {
    const ref = firebase.storage().ref();
    const fileRef = ref.child(file.name);
    fileRef.put(file);
    fileRef.getDownloadURL().then((result) => {
      setUrl(result);
    });
  }

  return [loading, signup];
}
