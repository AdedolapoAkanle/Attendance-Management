import { combineReducers, createStore } from "redux";
import LoginReducer from "./LoginReducer";

const joinReducers = combineReducers({
  login: LoginReducer,
});

export const store = createStore(
  joinReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
