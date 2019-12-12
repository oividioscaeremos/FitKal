import React from 'react';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header = ({ children, ...otherProps }) => {
  return (
    <AntHeader style={{ background: '#fff', padding: 0 }} {...otherProps}>
      {children}
    </AntHeader>
  );
};

export default Header;
