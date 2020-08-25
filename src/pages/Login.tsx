import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 16,
    }
};

const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 16,
    },
};

const Login = () => {

    const [redirect, setRedirect] = useState(false);

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);

        setRedirect(true);
    };

    if(redirect) {
        return <Redirect to="/" />;
    }

    return (
        <div style={{ 
            width: '400px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            marginTop: '200px'
        }}>
            <Form {...layout} onFinish={onFinish} >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email.',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password.',
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;