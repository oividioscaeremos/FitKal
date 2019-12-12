import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Icon } from 'antd';

// Components
import { Card, Input, Button } from '../../components';

import { authAction } from '../../redux/modules';

const Login = props => {
  const dispatch = useDispatch();
  const authState = useSelector(store => store.auth);
  const { getFieldDecorator, validateFields } = props.form;

  return (
    <div className="center-center" style={{ minHeight: '100vh' }}>
      <Card style={{ maxWidth: '300px' }}>
        <blockquote>Username: admin</blockquote>
        <blockquote>Password: admin</blockquote>
        <br />
        <Form
          onSubmit={e => {
            e.preventDefault();
            validateFields((err, values) => {
              if (!err) {
                const { username, password } = values;
                dispatch(authAction.login(username, password));
              }
            });
          }}
        >
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Kullanıcı adı giriniz' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Kullanıcı Adı"
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Şifre giriniz' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Şifre"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%' }}
              loading={authState.isLoading}
            >
              GİRİŞ
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Form.create({ name: 'login' })(Login);
