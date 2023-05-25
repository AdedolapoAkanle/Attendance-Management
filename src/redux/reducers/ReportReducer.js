import { formatDate } from "../../HelperFunction/commonFunction";
import { REPORT } from "../actions";

const INITIAL_STATE = {
  reportState: {
    id: "",
    gender: "",
    arr: [],
    logDate: formatDate(new Date()),
    isLoading: true,
  },
};

const ReportReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPORT:
      return { ...state, reportState: action.payload };

    default:
      return state;
  }
};

export default ReportReducer;
