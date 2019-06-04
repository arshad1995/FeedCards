import * as feedsActions from "../actions/data.actions";

let initialState = {
  loading: false,
  feeds: "",
  status: null,
  error: null
};

const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case feedsActions.FEEDS_REQUESTING:
      return {
        ...state,
        loading: true,
        status: action.status
      };

    case feedsActions.FEEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.status,
        feeds: action.data
      };

    case feedsActions.FEEDS_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.status,
        error: action.error
      };

    default:
      return state;
  }
};

export default feedsReducer;
