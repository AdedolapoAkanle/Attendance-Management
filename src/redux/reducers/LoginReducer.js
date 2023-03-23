import { LOGIN } from "../actions";

const INITIAL_STATE = {
  loginState: {
    email: "",
    pass: "",
    errorMsg: true,
  },
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginState: action.payload };

    default:
      return state;
  }
};

export default LoginReducer;
