import { SUCCESS, FAILURE, REQUESTING } from "../utils/constants";

export const FEEDS_REQUESTING = "FEEDS_REQUESTING";
export const FEEDS_SUCCESS = "FEEDS_SUCCESS";
export const FEEDS_FAILURE = "FEEDS_FAILURE";

export const CARDS_DATA_REQUESTING = "CARDS_DATA_REQUESTING";
export const CARDS_DATA_SUCCESS = " CARDS_DATA_SUCCESS";
export const CARDS_DATA_FAILURE = "CARDS_DATA_FAILURE";

export const feedsRequesting = () => ({
  type: FEEDS_REQUESTING,
  status: REQUESTING
});

export const feedsSuccess = data => ({
  type: FEEDS_SUCCESS,
  status: SUCCESS,
  data
});

export const feedsFailure = error => ({
  type: FEEDS_FAILURE,
  status: FAILURE,
  error
});

export const getFeeds = () => {
  return async dispatch => {
    dispatch(feedsRequesting());
    try {
      const data = await fetch("http://localhost:3000/feeds");
      const result = await data.json();
      dispatch(feedsSuccess(result));
    } catch (error) {
      dispatch(feedsFailure(error));
    }
  };
};

export const cardsRequesting = () => ({
  type: CARDS_DATA_REQUESTING,
  status: REQUESTING
});

export const cardsSuccess = data => ({
  type: CARDS_DATA_SUCCESS,
  status: SUCCESS,
  data
});

export const cardsFailure = error => ({
  type: CARDS_DATA_FAILURE,
  status: FAILURE,
  error
});

export const getCards = id => {
  return async dispatch => {
    dispatch(cardsRequesting());
    try {
      const data = await fetch(`http://localhost:3000/feeds/${id}`);
      console.log(data);
      const result = await data.json();
      dispatch(cardsSuccess(result));
    } catch (error) {
      dispatch(cardsFailure(error));
    }
  };
};
