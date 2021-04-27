import { useEffect, useState } from "react";

import { useProcessContext, useModalContext } from "../../context";
import { firebase } from "../../libs/firebase";

export default function useList(listname) {
  const [{ nickname, array }, setList] = useState({
    nickname: null,
    array: null,
  });

  const [{ processing }, setProcessProps] = useProcessContext();
  const [, { showErrorModal }] = useModalContext();

  useEffect(() => {
    if (!processing && array) {
      setProcessProps({ processing: true, message: "Process your vote" });
      firebase
        .firestore()
        .collection(`${nickname}`)
        .doc(`${listname}`)
        .update({ listname: array })
        .then(() => {
          setList({ nickname: null, array: null });
          setProcessProps((prev) => ({ ...prev, processing: false }));
        })
        .catch(() => {
          setList({ nickname: null, array: null });
          setProcessProps((prev) => ({ ...prev, processing: false }));
          showErrorModal("Something gone wrong");
        });
    }
  }, [nickname, array, listname]);

  return [setList];
}
