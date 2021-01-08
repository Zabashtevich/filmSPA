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
  reviewData,
) => {
  if (!user) {
    setErrorMessage(["Please, log in to create review"]);
    setErrorModalVisible(true);
    setTimeout(() => history.push("/authentication/login"), 3000);
  }
  const globalReview = createGlobalReviewInfo(
    rating,
    title,
    textfield,
    user.displayName,
  );

  const userInfo = createUserReviewInfo(id, +rating, title, textfield);
  if (userData.find((item) => item.id === id)) {
    const userIndex = userData.indexOf(userData.find((item) => item.id === id));
    userData[userIndex] = userInfo;
    console.log(userData);

    firebase
      .firestore()
      .collection(`${user.displayName}`)
      .doc(`reviews`)
      .update({
        list: userData,
      })
      .catch((error) => {
        setErrorMessage([error]);
        setErrorModalVisible(true);
      });
    // firebase
    //   .firestore()
    //   .collection("Reviews")
    //   .doc(`${id}`)
    //   .update({
    //     list: [...reviewData, globalReview],
    //   })
    //   .catch((error) => {
    //     setErrorMessage([error]);
    //     setErrorModalVisible(true);
    //   });
  } else {
    firebase
      .firestore()
      .collection(`${user.displayName}`)
      .doc(`reviews`)
      .update({
        list: [...userData, userInfo],
      })
      .catch((error) => {
        setErrorMessage([error]);
        setErrorModalVisible(true);
      });

    firebase
      .firestore()
      .collection("Reviews")
      .doc(`${id}`)
      .update({
        list: [...reviewData, globalReview],
      })
      .catch((error) => {
        setErrorMessage([error]);
        setErrorModalVisible(true);
      });
  }
};
