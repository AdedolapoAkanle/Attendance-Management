import { combineReducers, createStore } from "redux";
import LoginReducer from "./LoginReducer";
import parentReducer from "./ParentReducer";

const joinReducers = combineReducers({
  login: LoginReducer,
  parent: parentReducer,
});

export const store = createStore(
  joinReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
