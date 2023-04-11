import { combineReducers, createStore } from "redux";
import ChildReducer from "./ChildReducer";
import LoginReducer from "./LoginReducer";
import ParentReducer from "./ParentReducer";

const joinReducers = combineReducers({
  login: LoginReducer,
  parent: ParentReducer,
  child: ChildReducer,
});

export const store = createStore(
  joinReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
