import { DATA_FETCHED_SUCCESS } from "../../../actions/account-page/constants";

const initialState = {
  sortBy: null,
  listType: null,
  listID: null,
  show: null,
  firstDate: null,
  secondaDate: null,
  amount: null,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHED_SUCCESS:
      console.log("123123123");
      break;
    default:
      return state;
  }
};

export default filter;
