import { firebase } from "./../../libs/firebase";

export default function createUserDatafolder(name) {
  const ratedmovies = firebase
    .firestore()
    .collection(`${name}`)
    .doc(`ratedmovies`)
    .set({ list: [] });
  const userlists = firebase
    .firestore()
    .collection(`${name}`)
    .doc(`userlists`)
    .set({ list: [], favorite: [] });
  const favorites = firebase
    .firestore()
    .collection(`${name}`)
    .doc(`favorites`)
    .set({ list: [] });
  return Promise.all([ratedmovies, userlists, favorites]);
}
