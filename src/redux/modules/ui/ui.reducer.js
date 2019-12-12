import * as uiTypes from './ui.type';

const initialState = {
  siderSelectedKeys: ['1'],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${uiTypes.CHANGE_SIDER_SELECTED_KEYS}`:
      return {
        ...state,
        siderSelectedKeys: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
