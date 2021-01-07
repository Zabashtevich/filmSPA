import { parse } from "query-string";

export const range = (start, end) => {
  return [...Array(end)].map((_, index) => index + start);
};

export const getPaginator = ({ search }) => {
  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? +parsedSearch.page : 1;
  return currentPage;
};

export const getPaginatorStart = (currentPage) => {
  const start = currentPage === 2 ? 1 : currentPage > 6 ? currentPage - 3 : 1;
  return start;
};

export const getPaginatorEnd = (currentPage) => {
  const end = currentPage <= 994 ? 10 : 1004 - currentPage;
  return end;
};

export const getHeaderProps = (setHeaderProp, headerProp) => {
  const height = window.pageYOffset;
  switch (true) {
    case height === 0:
      setHeaderProp({
        visible: true,
        scrollPost: 0,
        standardPosition: true,
        positionchanged: false,
      });
      break;
    case height > 200:
      setHeaderProp({
        visible: height < headerProp.scrollPost,
        scrollPost: window.pageYOffset,
        standardPosition: false,
        positionchanged: true,
      });
      break;
    case height > 0 && height < 200:
      setHeaderProp({
        scrollPost: height,
        standardPosition: false,
        visible: true,
        positionchanged: false,
      });
      break;
    default:
      return;
  }
};

export const getQuerry = (data) => {
  if (!data) return "";
  const processedData = data.map((item) => {
    const key = Object.keys(item);
    const value = Object.values(item);
    return [`&&${key}=${value}`];
  });
  const querry = processedData.join("");
  return querry;
};

export const getRowFormat = (data) => {
  if (data.length !== 0) {
    const genres = [];
    data.map((item) => genres.push(item.name));
    return genres.join(", ");
  }
  return "Unknown";
};

export const getBudgetFormat = (data) => {
  if (!data) return "Unknown";
  const budget = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return budget + " $";
};

export const getCorrectSrc = (data) => {
  const correctSrc = { changed: false, src: null };
  if (data === null) {
    correctSrc.changed = true;
    correctSrc.src = "./../../assets/images/poster.png";
  } else if (data.includes("https")) {
    correctSrc.src = data.split("").slice(1).join("");
    correctSrc.changed = true;
  } else {
    return;
  }

  return correctSrc;
};

export const getKnownFor = (data) => {
  const sortedData = data.sort(
    (prev, item) => item.popularity - prev.popularity,
  );
  const resultArray = sortedData.splice(0, 10);
  return resultArray;
};

export const getRightReleasedDate = (date) => {
  if (!date) return "Unknown";
  const correctDate = date.substring(0, date.indexOf("-"));
  return correctDate;
};

export const getArrayOfMovies = (data) => {
  const sortedArray = data.sort((prev, next) => {
    const prevData = getRightReleasedDate(prev.release_date);
    const nextData = getRightReleasedDate(next.release_date);
    return nextData - prevData;
  });

  return sortedArray;
};

export const getErrorsList = (data, setErrorsList) => {
  const result = [];
  if (typeof data === "object") {
    Object.keys(data).map((item) => result.push(data[item].message));
  } else {
    console.log("567");
    result.push("passwords doesnt match");
  }
  return result;
};

export const createUserReviewInfo = (id, rating, title, textfield) => {
  return { id: id, rating: rating, title: title, text: textfield };
};

export const createGlobalReviewInfo = (rating, title, textfield, nickname) => {
  return {
    rating: +rating,
    title: title,
    text: textfield,
    nickname: nickname,
    avatar: null,
    date: 0,
  };
};

export const getCorrectReviewsArray = (array) => {
  const result = [];
  array.map((item) => {
    result.push({
      nickname: item.author,
      rating: item.author_details.rating,
      text: item.content,
      date: item.created_at,
      avatar: item.author_details.avatar_path,
    });
  });
  return result;
};

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
