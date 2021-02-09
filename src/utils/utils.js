import { parse } from "query-string";

export const range = (start, end) => {
  return [...Array(end)].map((_, index) => index + +start);
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
    result.push("passwords doesnt match");
  }
  return result;
};

export const createUserReviewInfo = (id, rating, title, textfield) => {
  return { id: id, rating: rating, title: title, text: textfield };
};

export const createNewReviewInfo = (rating, title, textfield, nickname) => {
  return {
    rating: +rating,
    title: title,
    text: textfield,
    nickname: nickname,
    avatar: null,
    date: new Date().getTime(),
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

export const offsetListener = () => {
  const offset = window.pageYOffset;
  if (offset < 1500) {
    document.body.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#f2f2f2";
  }
};

export async function validateImg(
  setErrorsList,
  setAvatarLoading,
  file,
  setImgIsValid,
  setFile,
) {
  if (!file.type.includes("image")) {
    setErrorsList(["Incorrect type of file"]);
    setAvatarLoading(false);
    setImgIsValid(false);
    return;
  } else {
    if (parseFloat(file.size / (1024 * 1024)) >= 3) {
      setErrorsList(["File size must be smaller than 3 MB"]);
      setAvatarLoading(false);
      setImgIsValid(false);
      return;
    }
  }

  await imageSizeValidate(file)
    .then(() => {
      setFile(file);
      setImgIsValid(true);
    })
    .catch(() => {
      setFile(null);
      setErrorsList(["File width or height must be smaller than 200px"]);
      setAvatarLoading(false);
      setImgIsValid(false);
      return;
    });
}

export function getPreviewSrc(file, setAvatarSrc, setFileName) {
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    setAvatarSrc(this.result);
  });

  reader.readAsDataURL(file);
}

function imageSizeValidate(file) {
  return new Promise(function (resolve, reject) {
    let img = new Image();
    img.src = window.URL.createObjectURL(file);

    img.onload = () => {
      if (img.width > 200 || img.height > 200) {
        reject();
      } else {
        resolve();
      }
    };
  });
}

export const checkMovieRated = (array, moviesrated) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < moviesrated.length; j++) {
      if (array[i].id === moviesrated[j].id) {
        array[i].rated = true;
        array[i].highscore = moviesrated[j].value;
      }
    }
  }
  return array;
};

export const filterLogic = (state, array, setArray) => {
  const { sortBy, byRating, rangeStart, rangeEnd } = state;
  let result;
  result = array.sort((item1, item2) => {
    switch (sortBy) {
      case "date":
        return item2.time - item1.time;
      case null:
        return item2.time - item1.time;
      case "rating":
        return item2.vote_average - item1.vote_average;
      case "yourRating":
        return item2.value - item1.value;
      case "amountOfVotes":
        return item2.vote_count - item1.vote_count;
    }
  });
  if (byRating !== null) {
    result = result.filter((item) => item.value === +byRating);
  }

  if (rangeStart !== null) {
    result = result.filter(
      (item) => getRightReleasedDate(item.date) >= +rangeStart,
    );
  }

  if (rangeEnd !== null) {
    result = result.filter(
      (item) => getRightReleasedDate(item.date) <= +rangeEnd,
    );
  }

  setArray({ processed: false, content: result });
};

export const checkFilterItemSelected = (i, item, value) => {
  return (i === 0 && item === null && 1) || (item === value && 1);
};
