import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext, useWarningContext } from "../../context";
import { firebase } from "../../libs/firebase";

export default function useRate() {
  const [settings, setSettings] = useState({
    setted: false,
    value: null,
    item: null,
  });

  const userProfile = useSelector();
  const userData = useSelector((store) => store.userData);

  const [, warninginterface] = useWarningContext();
  const [, modalinterface] = useModalContext();

  const { profile, profileLoading } = userProfile;
  const { showModal } = modalinterface;
  const { show, close } = warninginterface;
  const { ratedMovies } = userData;
  const { setted, value, item } = settings;

  useEffect(() => {
    if (profileLoading || !setted) return;
    if (profile === null) {
      showModal("error", "Sorry, but you need to login before rate something");
    } else if (!profileLoading) {
      const date = new Date();
      show("Processing your vote");
      firebase
        .firestore()
        .collection(`${profile.displayName}`)
        .doc(`moviesrated`)
        .update({
          list: [
            ...ratedMovies.filter((card) => card.id !== item.id),
            {
              title: item.title,
              id: item.id,
              value: value,
              time: `${date.getUTCFullYear()}/${
                date.getUTCMonth() + 1
              }/${date.getUTCDate()}`,
            },
          ],
        })
        .then(() => close())
        .catch(() =>
          showModal("error", "Something went wrong, try to rate later :c"),
        );
    }
  }, [
    profileLoading,
    value,
    item,
    setted,
    close,
    profile,
    show,
    showModal,
    ratedMovies,
  ]);

  return [setSettings];
}
