import { SET_USER, SET_TOKEN } from "./types";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const INITIAL_STATE = {
  user: null,
  token: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
