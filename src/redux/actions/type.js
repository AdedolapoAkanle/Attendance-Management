import { LOGIN, PARENT } from ".";

export const LoginAction = (param) => {
  return {
    type: LOGIN,
    payload: param,
  };
};

export const parentAction = (param) => {
  return {
    type: PARENT,
    payload: param,
  };
};
