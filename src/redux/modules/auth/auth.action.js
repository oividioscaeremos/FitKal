import { API } from '../../../config/configureAxios';
import * as authTypes from './auth.type';
import { formUrlEncoded } from '../../../utils/utils';

const config = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
};

export const login = (username, password) => async dispatch => {
  dispatch({ type: authTypes.LOGIN_PENDING });

  // TODO: Servise bağlanacak
  if (username === 'admin' && password === 'admin') {
    dispatch({ type: authTypes.LOGIN_FULFILLED });
  } else {
    dispatch({ type: authTypes.LOGIN_REJECTED });
  }

  // const data = formUrlEncoded({ username, password });
  // try {
  //   const response = await API.post(`/login`, data, config);
  //   dispatch({ type: authTypes.LOGIN_FULFILLED, payload: response.data });
  // } catch (error) {
  //   dispatch({ type: authTypes.LOGIN_REJECTED, payload: error });
  // }
};

export const logout = () => async dispatch => {
  API.post(`/logout`);
  dispatch({ type: authTypes.LOGOUT });
};
