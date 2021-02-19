import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext } from "../../../context";
import { firebase } from "../../../libs/firebase";

export default function useCreateList(item) {
  const [modalstate, modalinterface] = useModalContext();
  const userData = useSelector((state) => state.userData);

  const { userlists, loading } = userData;
  const { accepted, value } = modalstate;
  const {
    showProcessingWindow,
    closeProcessingWindow,
    showUtilityModal,
  } = modalinterface;

  useEffect(() => {
    if (!loading) {
      if (!accepted) {
        showUtilityModal("Enter a list name");
      } else {
        showProcessingWindow("Creating list");
        firebase
          .firestore()
          .collection(nickname)
          .doc("collection")
          .update({ list: [...userlists.concat({ ...item, name: value })] });
      }
    }
  }, [item, loading]);
}
