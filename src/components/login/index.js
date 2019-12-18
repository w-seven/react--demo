import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import createHistory from 'history/createHashHistory'
import store from '../../store'
import axios from 'axios'
import 'antd/dist/antd.css'
import './login.css'

const history = createHistory()

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        console.log("loginstore",store.getState())
        console.log("login", this.props, this.state)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let { username, password } = values
                console.log(username, password)
                // console.log("path",this.props.location.pathname)
                // axios.post("url").then((res) => {
                //     console.log(res)
                // })
                if( username === this.state.userName && password === this.state.password){
                    this.props.history.replace('/home')
                }else{
                    console.log("login fail")
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-page">
                <div className="box">
                    <p>学生管理系统</p>
                    <div className="login-wrap">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const LoginPage = Form.create({ name: 'normal_login' })(Login);
export default LoginPage;