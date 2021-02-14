import React, { useEffect } from "react";
import { notification, Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { PageTitle } from "../../components/PageTitle";
//Services
import * as DM from "./dataManager";

import { ROUTES } from "../../constants";

//Actions
import { login } from "./action";


function LoginComponent() {

  const { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleLogin = async (data) => {
    await DM.loginService(data.email, data.password)
      .then((res) => {
        handleAfterLogin(res);
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          alert(error.response.data.message)
          notification.error({
            message: error.response.data.message,
            duration: 2
          })
        }
        else {
          alert("Something went wrong")
          notification.error({
            message: "Something went wrong",
            duration: 2
          })
        }
      });
  };

  const handleAfterLogin = (data) => {
    dispatch(login(data));
    window.location.replace(ROUTES.DASHBOARD);
  }

  return (
    <>
      <PageTitle title="Login" />
      <Form name='login_form' layout='vertical' size='large' onFinish={handleLogin} className='login-form'>
        <Form.Item label="Email" id='email' name='email'
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: "Please enter valid email" }
          ]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="Password" id='password' name='password'
          rules={[
            { required: true, message: 'Please enter password' }
          ]}>
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item style={{ marginTop: '3rem' }}>
          <Button type='primary' block size='large' htmlType='submit' loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginComponent;
