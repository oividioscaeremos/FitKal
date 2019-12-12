import * as depotTypes from './depot.type';

const initialState = {
  depots: [],
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // LIST
    case `${depotTypes.LIST_DEPOT_PENDING}`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${depotTypes.LIST_DEPOT_FULFILLED}`:
      return {
        ...state,
        isLoading: false,
        depots: action.payload,
      };
    case `${depotTypes.LIST_DEPOT_REJECTED}`:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        depots: [],
      };

    default:
      return state;
  }
};

export default reducer;
