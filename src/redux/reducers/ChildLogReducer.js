import { formatDate } from "../../HelperFunction/commonFunction";
import { CHILD_LOG } from "../actions";

const INITIAL_STATE = {
  childLogState: {
    childId: "",
    parentId: "",
    lastName: "",
    firstName: "",
    gender: "",
    logDate: formatDate(new Date()),
    tag: "",
    arr: [],
    staticArr: [],
    isLoading: true,
  },
};

const ChildLogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHILD_LOG:
      return { ...state, childLogState: action.payload };

    default:
      return state;
  }
};

export default ChildLogReducer;
