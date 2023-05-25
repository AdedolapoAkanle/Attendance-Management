import { combineReducers, createStore } from "redux";
import ChildReducer from "./ChildReducer";
import LoginReducer from "./LoginReducer";
import ParentReducer from "./ParentReducer";
import RegistrationReducer from "./RegistrationReducer";
import ChildLogReducer from "./ChildLogReducer";
import ReportReducer from "./ReportReducer";

const joinReducers = combineReducers({
  login: LoginReducer,
  parent: ParentReducer,
  child: ChildReducer,
  registration: RegistrationReducer,
  childLog: ChildLogReducer,
  report: ReportReducer,
});

export const store = createStore(
  joinReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
