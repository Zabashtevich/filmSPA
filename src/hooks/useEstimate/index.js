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

  console.log(username, doc, array);

  useEffect(() => {
    if (array) {
      console.log("za");
      setProcess({ processing: true, message: "Adding your vote..." });
      firebase
        .firestore()
        .collection(`${username}`)
        .doc(`${doc}`)
        .update({ [doc]: array })
        .then(() => {
          setProcess((prev) => ({ ...prev, processing: false }));
          setArray(null);
          console.log("hi");
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
