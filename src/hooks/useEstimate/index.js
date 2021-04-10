import { useEffect, useState } from "react";
import { useFirebaseContext, useModalContext } from "../../context";

export default function useEstimate(username, doc) {
  const [, { showErrorModal }] = useModalContext();
  const { firebase } = useFirebaseContext();
  const [array, setArray] = useState(null);

  useEffect(() => {
    if (array) {
      firebase
        .firestore()
        .collection(`${username}`)
        .doc(`${doc}`)
        .update({ [doc]: array })
        .then(() => {
          setArray(null);
        })
        .catch(() => {
          showErrorModal("Something gone wrong");
          setArray(null);
        });
    }
  }, [doc]);

  return [setArray];
}
