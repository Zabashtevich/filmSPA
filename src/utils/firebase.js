import {
  getErrorsList,
  createGlobalReviewInfo,
  createUserReviewInfo,
} from "./utils";

export const authLogic = (
  setUserLoading,
  slug,
  firebase,
  nickname,
  email,
  password,
  repeatPassword,
  setErrorsList,
  setUserRedirect,
  history,
) => {
  setUserLoading(true);
  switch (slug) {
    case "login":
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/");
        })
        .catch(({ message }) => {
          setErrorsList([message]);
          setUserLoading(false);
        });
      break;
    case "registration":
      repeatPassword !== password
        ? getErrorsList(repeatPassword, setErrorsList)
        : setErrorsList(null);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          result.user
            .updateProfile({
              displayName: nickname,
            })
            .then(() => {
              firebase
                .firestore()
                .collection(`${nickname}`)
                .doc(`moviesrated`)
                .set({ list: [] })
                .catch(() => {
                  setUserLoading(false);
                  setErrorsList([`something gone wrong`]);
                });
              firebase
                .firestore()
                .collection(`${nickname}`)
                .doc(`collection`)
                .set({ list: [] })
                .catch(() => {
                  setUserLoading(false);
                  setErrorsList([`something gone wrong`]);
                });
              firebase
                .firestore()
                .collection(`${nickname}`)
                .doc(`reviews`)
                .set({ list: [] })
                .catch(() => {
                  setUserLoading(false);
                  setErrorsList([`something gone wrong`]);
                })
                .then(() => {
                  setUserLoading(false);
                  setUserRedirect(true);
                });
            });
        })
        .catch(({ message }) => {
          setErrorsList([message]);
          setUserLoading(false);
        });

      break;
    default:
      setErrorsList(["something gone wrong"]);
  }
};

export const postReviewLogic = (
  user,
  setErrorMessage,
  setErrorModalVisible,
  history,
  firebase,
  userData,
  id,
  textfield,
  rating,
  title,
) => {
  if (!user) {
    setErrorMessage(["Please, log in to create review"]);
    setErrorModalVisible(true);
    setTimeout(() => history.push("/authentication/login"), 3000);
  }

  firebase
    .firestore()
    .collection(`${user.displayName}`)
    .doc(`reviews`)
    .update({
      list: [...userData, createUserReviewInfo(id, +rating, title, textfield)],
    })
    .catch((error) => {
      setErrorMessage([error]);
      setErrorModalVisible(true);
    });

  const globalReview = createGlobalReviewInfo(
    rating,
    title,
    textfield,
    user.displayName,
  );
  firebase
    .firestore()
    .collection("Reviews")
    .doc(`${id}`)
    .update({
      list: [globalReview],
    })
    .catch((error) => {
      setErrorMessage([error]);
      setErrorModalVisible(true);
    });
};
