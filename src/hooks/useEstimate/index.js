import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useAccountContext } from "../../context";
import { AccountMetalogicContext } from "../../context/account-metalogic-context/constants";
import { firebase } from "./../../libs/firebase";

export default function useEstimate(show) {
  const [, accountinterface] = useAccountContext();
  const userData = useSelector((store) => store.userData);
  const userProfile = useSelector((store) => store.userProfile);
  const [estimatingSettings, setEstimatingSettings] = useState({
    value: null,
    id: null,
  });
  const { showProcessingWindow, closeProcessingWindow } = accountinterface;
  const { userdataLoading } = userData;
  const { profile, profileLoading } = userProfile;
  useEffect(() => {
    if (
      !userdataLoading &&
      !profileLoading &&
      estimatingSettings.value !== null
    ) {
      showProcessingWindow("Your estimate in process");
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc("moviesrated")
        .update({ list: [] });
    }
  }, []);
}
