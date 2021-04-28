import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useProcessContext, useModalContext } from "../../context";
import { firebase } from "../../libs/firebase";

export default function useList(listname) {
  const { profile, loggedIn } = useSelector((state) => state.userData);
  const [array, setArray] = useState(null);

  const [{ processing }, setProcessProps] = useProcessContext();
  const [, { showErrorModal }] = useModalContext();

  useEffect(() => {
    if (array && !loggedIn) {
      showErrorModal("Please, login");
      setArray(null);
    }
    if (!processing && array) {
      setProcessProps({ processing: true, message: "Process your vote" });
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc(`${listname}`)
        .update({ ...array })
        .then(() => {
          setArray(null);
          setProcessProps((prev) => ({ ...prev, processing: false }));
        })
        .catch(() => {
          setArray(null);
          setProcessProps((prev) => ({ ...prev, processing: false }));
          showErrorModal("Something gone wrong");
        });
    }
  }, [array, listname]);

  return [setArray];
}
