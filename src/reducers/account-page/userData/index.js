import { DATA_FETCHED_SUCCESS } from "../../../actions/account-page/constants";

const initialState = { value: null };

const userData = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHED_SUCCESS:
      console.log("hihihih");
      break;
    default:
      return state;
  }
};

export default userData;
