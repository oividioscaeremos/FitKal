import * as uiTypes from './ui.type';

export const changeSiderSelectedKeys = selectedKeys => dispatch => {
  dispatch({ type: uiTypes.CHANGE_SIDER_SELECTED_KEYS, payload: selectedKeys });
};
