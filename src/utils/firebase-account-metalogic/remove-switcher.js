import removeList from "./remove-list";

export default function removeLogic(target, id) {
  switch (target) {
    case "list":
      return removeList(id, userlists, nickname);
  }
}
