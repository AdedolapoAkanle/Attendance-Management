import { LOGIN } from ".";

export const LoginAction = (param) => {
  return {
    type: LOGIN,
    payload: param,
  };
};
