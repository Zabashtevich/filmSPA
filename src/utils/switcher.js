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
    case "error":
      setModal((prev) => ({ ...prev, errorModal: false, errorMessage: "" }));
  }
};
