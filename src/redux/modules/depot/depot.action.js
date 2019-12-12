import { API } from '../../../config/configureAxios';
import * as depotTypes from './depot.type';

const REQUEST_URL = '/depot';

export const getAll = () => async dispatch => {
  dispatch({ type: depotTypes.LIST_DEPOT_PENDING });

  try {
    const response = await API.get(`${REQUEST_URL}`);
    dispatch({ type: depotTypes.LIST_DEPOT_FULFILLED, payload: response.data });
  } catch (error) {
    dispatch({ type: depotTypes.LIST_DEPOT_REJECTED, payload: error });
  }
};
