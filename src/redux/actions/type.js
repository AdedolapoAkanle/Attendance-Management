import { CHILD, CHILD_LOG, LOGIN, PARENT, REGISTRATION, REPORT } from ".";

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

export const registerAction = (param) => {
  return {
    type: REGISTRATION,
    payload: param,
  };
};

export const childLogAction = (param) => {
  return {
    type: CHILD_LOG,
    payload: param,
  };
};

export const reportAction = (param) => {
  return {
    type: REPORT,
    payload: param,
  };
};
