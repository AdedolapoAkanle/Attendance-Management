import { PARENT } from "../actions";

const INITIAL_STATE = {
  parentState: {
    title: "",
    firstName: "",
    lastName: "",
    phone: "",
    id: "",
    arr: [],
  },
};

const parentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PARENT:
      return { ...state, parentState: action.payload };

    default:
      return state;
  }
};

export default parentReducer;
