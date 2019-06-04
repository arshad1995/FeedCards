import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import feedsReducer from "./reducers/feeds.reducers";
import cardsReducers from "./reducers/cards.reducers";

const reducers = combineReducers({
  feeds: feedsReducer,
  cards: cardsReducers
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
