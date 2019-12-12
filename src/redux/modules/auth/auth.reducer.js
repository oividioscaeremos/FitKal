import * as authTypes from './auth.type';

const initialState = {
  isAuthenticated: false,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${authTypes.LOGIN_PENDING}`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${authTypes.LOGIN_FULFILLED}`:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    case `${authTypes.LOGIN_REJECTED}`:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    case `${authTypes.LOGOUT}`:
      return { ...initialState };

    default:
      return state;
  }
};

export default reducer;
