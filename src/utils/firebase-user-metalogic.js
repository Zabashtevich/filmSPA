export function removeLogic(firebase, target, id, userlists, nickname) {
  switch (target) {
    case "list":
      return removeList(firebase, target, id, userlists, nickname);
  }
}

const removeList = (firebase, target, id, userlists, nickname) => {
  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc("collection")
    .update({ list: [...userlists.filter((item) => +item.id !== id)] });
};

export function renameLogic(firebase, id, listname, userlists, nickname) {
  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc("collection")
    .update({
      list: [
        ...userlists.map((item) =>
          item.id === id ? { ...item, name: listname } : { ...item },
        ),
      ],
    });
}

export function createListLogic(firebase, listname, userlists, nickname) {
  return firebase
    .firestore()
    .collection(`${nickname}`)
    .doc("collection")
    .update({
      list: [
        ...userlists,
        {
          name: listname,
          id: Math.floor(Math.random() * Math.floor(1000)),
          content: [],
        },
      ],
    });
}
