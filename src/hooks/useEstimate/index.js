import { useEffect, useState } from "react";
import {
  useFirebaseContext,
  useModalContext,
  useProcessContext,
} from "../../context";

export default function useEstimate(username, doc) {
  const [, setProcess] = useProcessContext();
  const [, { showErrorModal }] = useModalContext();
  const { firebase } = useFirebaseContext();
  const [array, setArray] = useState(null);

  useEffect(() => {
    if (array) {
      setProcess({ processing: true, message: "Adding your vote..." });
      firebase
        .firestore()
        .collection(`${username}`)
        .doc(`${doc}`)
        .update({ [doc]: array })
        .then(() => {
          setTimeout(() => {
            setProcess((prev) => ({ ...prev, processing: false }));
          }, 1000);
          setArray(null);
        })
        .catch(() => {
          setProcess((prev) => ({ ...prev, processing: false }));
          showErrorModal("Something gone wrong");
          setArray(null);
        });
    }
  }, [array]);

  return [setArray];
}
