import * as cardsAction from "../actions/data.actions";

let initialState = {
  loading: false,
  cards: "",
  status: null,
  error: null
};

const cardsReducers = (state = initialState, action) => {
  switch (action.type) {
    case cardsAction.CARDS_DATA_REQUESTING:
      return {
        ...state,
        loading: true,
        status: action.status
      };

    case cardsAction.CARDS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.status,
        cards: action.data
      };

    case cardsAction.CARDS_DATA_FAILURE:
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

export default cardsReducers;
