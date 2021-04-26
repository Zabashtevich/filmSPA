import { useEffect, useState } from "react";

import { useProcessContext, useModalContext } from "../../context";
import { firebase } from "../../libs/firebase";

export default function useList() {
  const [{ nickname, array, listname, errorMessage }, setList] = useState({
    nickname,
    array,
    listname,
    errorMessage,
  });

  const [, setProcessProps] = useProcessContext();
  const [, { showErrorModal }] = useModalContext();

  useEffect(() => {
    setProcessProps({ processing: true, message: errorMessage });
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
  }, [nickname, array, listname, errorMessage]);

  return [setList];
}
