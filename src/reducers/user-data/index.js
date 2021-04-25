const initialState = {
  userProfileLoading: true,
  userDataLoading: true,
  userDataExist: false,
  profile: null,
  profileExist: false,
  lists: { userlists: null, favorites: null, votes: null },
};

export default function userData(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profileExist: true,
        profileLoading: false,
        profile: payload,
      };
    case LOGOUT:
      return {
        ...state,
        profileExist: false,
        userDataExist: false,
        profile: payload,
        lists: { userlists: null, favorites: null, votes: null },
      };
    case SET_USER_DATA:
      return {
        ...state,
        userDataLoading: false,
        userDataExist: true,
        lists: {
          userlists: payload.userlists,
          favorites: payload.favorites,
          votes: payload.votes,
        },
      };
    default:
      return state;
  }
}
