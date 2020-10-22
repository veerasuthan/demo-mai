import { createStore, compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import appReducer from "./reducers";

const enhancer = compose(applyMiddleware(logger))

export default function store (initialState) {
  return createStore(
    appReducer,
    initialState,
    enhancer
  );
}
