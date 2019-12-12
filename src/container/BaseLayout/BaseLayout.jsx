import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Header, Menu } from '..';

const { Content } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />

          <Menu />
        </Header>

        <Content style={{ background: '#fff', padding: 24 }}>
          <Row type="flex" justify="center">
            <Col xs={24} lg={24} xl={23} style={{ textAlign: 'center' }}>
              {children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default BaseLayout;
