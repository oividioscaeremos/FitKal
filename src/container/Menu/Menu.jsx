import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Menu as AntMenu, Icon } from 'antd';

import { uiAction } from '../../redux/modules';

const Menu = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { siderSelectedKeys } = useSelector(store => store.ui);

  return (
    <AntMenu
      theme="dark"
      mode="horizontal"
      selectedKeys={siderSelectedKeys}
      style={{ lineHeight: '64px' }}
      onSelect={e => {
        dispatch(uiAction.changeSiderSelectedKeys(e.selectedKeys));
      }}
      {...props}
    >
      <AntMenu.Item key="1" onClick={() => history.push('/')}>
        <Icon type="user" />
        <span className="nav-text">Anasayfa</span>
      </AntMenu.Item>
    </AntMenu>
  );
};

export default Menu;
