export const LOGIN_PROCESS = 'LOGIN_PROCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGIST_PROCESS = 'REGIST_PROCESS';
export const REGIST_SUCCESS = 'REGIST_SUCCESS';
export const REGIST_ERROR = 'REGIST_ERROR';

export const GET_PRODUCT_PROCESS = 'GET_PRODUCT_PROCESS';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export function login(data) {
  return {
    type: LOGIN_PROCESS,
    data: data,
  };
}

export function register(data) {
  return {
    type: REGIST_PROCESS,
    data: data,
  };
}

export function getProduct() {
  return {
    type: GET_PRODUCT_PROCESS,
  };
}



