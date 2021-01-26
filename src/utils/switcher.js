import { createListLogic } from "./firebase";

export const closeModalSwitcher = (target, value, setModal) => {
  switch (target) {
    case "confirm":
      if (value) {
        setModal((prev) => ({
          ...prev,
          confirm: false,
          confirmMessage: "",
          delete: true,
        }));
      } else {
        setModal((prev) => ({
          ...prev,
          confirm: false,
          confirmMessage: "",
          delete: false,
          deleteID: null,
        }));
      }
      break;
    case "edit":
      if (value) {
        setModal((prev) => ({ ...prev, editModal: false, edit: true }));
      } else {
        setModal((prev) => ({
          ...prev,
          editModal: false,
          edit: false,
          editID: null,
        }));
      }
      break;
    case "error":
      setModal((prev) => ({ ...prev, errorModal: false, errorMessage: "" }));
      break;
    default:
      return null;
  }
};

export const showModalSwitcher = (target, id, value, setModal) => {
  switch (target) {
    case "delete":
      setModal((prev) => ({
        ...prev,
        confirm: true,
        confirmMessage: `Are you sure you want to delete list ${value}?`,
        deleteID: id,
      }));
      break;
    case "rename":
      setModal((prev) => ({ ...prev, editModal: true, editID: id }));
      break;
    case "error":
      setModal((prev) => ({ ...prev, errorModal: true, errorMessage: value }));
      break;
    default:
      return null;
  }
};

export const createListSwitcher = (
  event,
  setCreatingList,
  setDataSubmiting,
  inputValue,
  setModal,
  firebase,
  data,
  nickname,
  setInputValue,
) => {
  if (!event.target.classList.value.includes("Confirm")) return;
  setCreatingList(false);
  setDataSubmiting(true);
  switch (inputValue) {
    case inputValue.length > 20:
      setModal((prev) => ({
        ...prev,
        errorMessage: ["Name can be max 20 characters long"],
        errorModal: true,
      }));
      break;
    case inputValue.length === 0 || inputValue.length < 3:
      setModal((prev) => ({
        ...prev,
        errorMessage: ["Name should be at least 4 characters long"],
        errorModal: true,
      }));
      break;
    default:
      createListLogic(firebase, inputValue, data, nickname).then(() => {
        setInputValue("");
      });
  }
  setDataSubmiting(false);
};
