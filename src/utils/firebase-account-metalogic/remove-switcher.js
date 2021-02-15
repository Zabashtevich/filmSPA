import removeList from "./remove-list";

export default function removeLogic(target, id, userlists, nickname) {
  switch (target) {
    case "list":
      return removeList(id, userlists, nickname);
  }
}
