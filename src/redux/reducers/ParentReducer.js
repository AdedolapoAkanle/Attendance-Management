import { PARENT } from "../actions";

const INITIAL_STATE = {
  parentState: {
    title: "",
    firstName: "",
    lastName: "",
    phone: "",
    id: "",
    arr: [],
    showParentModal: false,
    showEditParentModal: false,
    selectedParentID: "",
  },
};

const ParentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PARENT:
      return { ...state, parentState: action.payload };

    default:
      return state;
  }
};

export default ParentReducer;
