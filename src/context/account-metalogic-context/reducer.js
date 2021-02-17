export const initialState = {
  warning: { visible: false, message: "" },
  modal: { visible: false, message: "", confirmed: false },
};

export default function accountReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    default:
      return state;
  }
}
