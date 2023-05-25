import { REGISTRATION } from "../actions";

const INITIAL_STATE = {
  registerState: {
    activeTab: "parent",
    isLoading: true,
  },
};

const RegistrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRATION:
      return { ...state, registerState: action.payload };

    default:
      return state;
  }
};

export default RegistrationReducer;
