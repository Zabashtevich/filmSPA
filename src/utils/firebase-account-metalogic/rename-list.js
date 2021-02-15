import { firebase } from "./../../libs/firebase";

export default function renameList(id, listname, userlists, nickname) {
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
