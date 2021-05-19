import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useProcessContext, useModalContext } from "../../context";
import { firebase } from "../../libs/firebase";

export default function useList(listname) {
  const { profile, loggedIn } = useSelector((state) => state.userData);
  const [data, setData] = useState(null);

  const [{ processing }, setProcessProps] = useProcessContext();
  const [, { showErrorModal }] = useModalContext();

  useEffect(() => {
    if (data && !loggedIn) {
      showErrorModal("Please, login");
      setData(null);
    }
    if (!processing && data) {
      setProcessProps({ processing: true, message: "Processing..." });
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc(`${listname}`)
        .update({ [`${listname}`]: data })
        .then(() => {
          setData(null);
          setProcessProps((prev) => ({ ...prev, processing: false }));
        })
        .catch(() => {
          setData(null);
          setProcessProps((prev) => ({ ...prev, processing: false }));
          showErrorModal("Something gone wrong");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, listname]);

  return [setData];
}
