import { CHILD } from "../actions";

const INITIAL_STATE = {
  childState: {
    id: "",
    parentId: "",
    lastName: "",
    firstName: "",
    address: "",
    gender: "",
    dob: "",
    arr: [],
    showChildModal: false,
    showEditChildModal: false,
    selectedId: "",
    query: "",
    isLoading: true,
  },
};

const ChildReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHILD:
      return { ...state, childState: action.payload };

    default:
      return state;
  }
};

export default ChildReducer;
