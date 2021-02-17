import { firebase } from "./../../libs/firebase";

export default function removeVote(id) {
  const userProfile = useSelector((store) => store.userProfile);
  const userData = useSelector((store) => store.userData);

  const { ratedMovies } = userData;

  return firebase
    .firestore()
    .collection(`${userProfile.profile.displayName}`)
    .doc("collection")
    .update({ list: [...ratedMovies.filter((item) => +item.id !== id)] });
}
