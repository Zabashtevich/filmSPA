import removeList from "./remove-list";
import removeVote from "./remove-vote";

export default function removeLogic(target, id) {
  switch (target) {
    case "list":
      return removeList(id, userlists, nickname);
    case "vote":
      return removeVote(id);
  }
}
