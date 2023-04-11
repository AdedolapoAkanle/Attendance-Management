import { CHILD, LOGIN, PARENT } from ".";

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

export const childAction = (param) => {
  return {
    type: CHILD,
    payload: param,
  };
};
