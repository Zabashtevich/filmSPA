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
        showConfirmModal(
          `Are you sure you want to delete your list "${item.name}"`,
        );
      } else {
        showProcessingWindow("Deleting list");
        firebase
          .firestore()
          .collection(nickname)
          .doc("collection")
          .update({
            list: [...userlists.filter((list) => +list.id !== +item.id)],
          });
      }
    }
  }, [item, loading]);
}
