import {
  getErrorsList,
  createNewReviewInfo,
  createUserReviewInfo,
} from "./utils";

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
  setPushingReview,
) => {
  setPushingReview(true);

  const newReview = createNewReviewInfo(
    rating,
    title,
    textfield,
    user.displayName,
  );

  const userInfo = createUserReviewInfo(id, +rating, title, textfield);

  if (
    userData.find((item) => item.id === id) &&
    reviewData.find((item) => item.nickname === user.displayName)
  ) {
    const userIndex = userData.indexOf(userData.find((item) => item.id === id));
    userData[userIndex] = userInfo;

    const globalIndex = reviewData.indexOf(
      reviewData.find((item) => item.nickname === user.displayName),
    );
    reviewData[globalIndex] = newReview;
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
    firebase
      .firestore()
      .collection("Reviews")
      .doc(`${id}`)
      .update({
        list: reviewData,
      })
      .catch((error) => {
        setErrorMessage([error]);
        setErrorModalVisible(true);
      })
      .then(() => {
        setPushingReview(false);
        history.push(`../${id}`);
      });
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
      .set({
        list: [...reviewData, newReview],
      })
      .catch((error) => {
        setErrorMessage([error]);
        setErrorModalVisible(true);
      })
      .then(() => {
        setPushingReview(false);
        history.push(`../${id}`);
      });
  }
};

export const authLogic = async (
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
  isAvatarChanged,
) => {
  setUserLoading(true);
  switch (slug) {
    case "login":
      userLogin(
        firebase,
        history,
        setErrorsList,
        setUserLoading,
        email,
        password,
      );
      break;
    case "registration":
      repeatPassword !== password
        ? getErrorsList(repeatPassword, setErrorsList)
        : setErrorsList(null);
      switch (isAvatarChanged) {
        case true:
          createUserWithAvatar(
            firebase,
            history,
            setErrorsList,
            setUserLoading,
            email,
            password,
          );
          break;
        case false:
          createUserWithoutAvatar(
            firebase,
            nickname,
            setUserLoading,
            setErrorsList,
            setUserRedirect,
            email,
            password,
          );
          break;
        default:
          setErrorsList(["something gone wrong"]);
      }
      break;
    default:
      setErrorsList(["something gone wrong"]);
  }
};

export const userLogin = (
  firebase,
  history,
  setErrorsList,
  setUserLoading,
  email,
  password,
) => {
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
};

export const createUserWithAvatar = async (
  firebase,
  nickname,
  setUserLoading,
  setErrorsList,
  setUserRedirect,
  file,
  email,
  password,
) => {
  const ref = firebase.storage().ref();
  const fileRef = ref.child(file.name);
  await fileRef.put(file);
  await fileRef.getDownloadURL().then(function (url) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: nickname,
            photoURL: url,
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
              .set({ list: [], favorite: [] })
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
  });
};

export const createUserWithoutAvatar = (
  firebase,
  nickname,
  setUserLoading,
  setErrorsList,
  setUserRedirect,
  email,
  password,
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user
        .updateProfile({
          displayName: nickname,
          photoURL: null,
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
            .set({ list: [], favorite: [] })
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
};
