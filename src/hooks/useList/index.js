import { useEffect, useState } from "react";

import { useProcessContext, useModalContext } from "../../context";
import { firebase } from "../../libs/firebase";

export default function useList() {
  const [{ nickname, array, listname }, setList] = useState({
    nickname,
    array,
    listname,
  });

  const [{ processing }, setProcessProps] = useProcessContext();
  const [, { showErrorModal }] = useModalContext();

  useEffect(() => {
    if (!processing) {
      setProcessProps({ processing: true, message: "Something gone wrong" });
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc(`${listname}`)
        .update({ listname: array })
        .then(() => {
          setProcessProps({ processing: false, message: null });
        })
        .catch(() => {
          setProcessProps({ processing: false, message: null });
          showErrorModal(errorMessage);
        });
    }
  }, [nickname, array, listname, errorMessage]);

  return [setList];
}
