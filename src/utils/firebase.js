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

export const createListLogic = (firebase, inputValue, data, name) => {
  return firebase
    .firestore()
    .collection(`${name}`)
    .doc(`collection`)
    .update({
      list: [
        ...data.concat([
          {
            name: inputValue,
            content: [],
            id: Math.ceil(Math.random() * 1000),
          },
        ]),
      ],
    });
};

export const deleteList = (firebase, id, array, nickname) => {
  const newArray =
    array.length === 1 ? [] : [...array.filter((item) => item.id !== id)];
  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc(`collection`)
    .update({ list: [...newArray] });
};

export const saveMovieInList = (firebase, nickname, id, data, slug) => {
  const newArray = data.map(
    (item) =>
      item.id === id && {
        content: [...item.content, +slug],
        name: item.name,
        id: item.id,
      },
  );
  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc(`collection`)
    .update({ list: [...newArray] });
};

export const deleteMovieFormList = (firebase, nickname, data, slug) => {
  const newArray = data.map((item) => ({
    ...item,
    content: item.content.filter((item) => item !== +slug),
  }));
  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc(`collection`)
    .update({ list: [...newArray] });
};

export const favoriteLogic = (firebase, item, nickname, isFavorite, array) => {
  if (isFavorite) {
    return firebase
      .firestore()
      .collection(`${nickname}`)
      .doc(`collection`)
      .update({ favorite: [...array.filter((i) => i.id !== item.id)] });
  } else {
    return firebase
      .firestore()
      .collection(`${nickname}`)
      .doc(`collection`)
      .update({
        favorite: [
          ...array,
          {
            id: item.id,
            title: item.title,
            vote_average: item.vote_average,
            vote_count: item.vote_count,
            time: new Date().getTime(),
            date: item.release_date,
          },
        ],
      });
  }
};

export const renameList = (firebase, nickname, array, id, name) => {
  const newArray = array.map((item) => {
    if (item.id === id) return { ...item, name };
    return item;
  });

  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc(`collection`)
    .update({ list: [...newArray] });
};

export const rateLogic = (
  user,
  history,
  userData,
  rateScore,
  firebase,
  showErrorModal,
  item,
) => {
  if (user === null) {
    history.push("/authentication/login");
  } else {
    firebase
      .firestore()
      .collection(`${user.displayName}`)
      .doc(`moviesrated`)
      .update({
        list: [
          ...userData.filter((card) => card.id !== item.id),
          { ...item, value: rateScore, time: new Date().getTime() },
        ],
      })
      .catch((error) => showErrorModal(error));
  }
};

export const logoutLogic = (
  setErrorMessage,
  setErrorModalVisible,
  history,
  firebase,
) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      history.push("/");
    })
    .catch(() => {
      setErrorMessage(["Sorry, now you can not log out"]);
      setErrorModalVisible(true);
    });
};
