import { firebase } from "./../../libs/firebase";

export default function createList(listname, userlists, nickname) {
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
