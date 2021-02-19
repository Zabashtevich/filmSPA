import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { firebase } from "./../../libs/firebase";
import { useModalContext } from "./../../context";

export default function useUserlist(nickname) {
  const [props, setProps] = useState({
    value: null,
    type: null,
    item: null,
  });

  const userData = useSelector((state) => state.userData);
  const [modalstate, modalinterface] = useModalContext();

  const { userlists, loading } = userData;
  const { value, accepted } = modalstate;
  const {
    showProcessingWindow,
    closeProcessingWindow,
    showErrorModal,
    showUtilityModal,
  } = modalinterface;
  const { type, value, item } = props;

  useEffect(() => {
    if (!loading) {
      if (type === "create" && !accepted) {
        showUtilityModal("Enter a list name");
      } else if (type === "create" && accepted) {
      }
    }
  }, []);
}
