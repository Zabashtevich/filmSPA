export const initialState = {
  warning: { visible: false, message: "" },
  errorModal: { visible: false, message: "" },
  confirmModal: { visible: false, message: "", id: null, confirmed: false },
  remove: { x },
};

export default function accountReducer(
  state = initialState,
  { type, payload, subtype = null },
) {
  switch (type) {
    default:
      return state;
  }
}
