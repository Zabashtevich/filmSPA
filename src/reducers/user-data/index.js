const initialState = {
  userDataLoading: true,
  userlists: null,
  favorites: null,
  votes: null,
};

export default function userData(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
