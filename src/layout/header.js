import React, { Component } from 'react';
import { Menu, Layout, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import './header.css'

const { SubMenu } = Menu
const { Header } = Layout

class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'wangxiaowo'
        }
    }
    render() {
        return (
            <Header style={{ background: '#fff' }}>
                <Menu mode="horizontal" className="logOut">
                    <SubMenu
                        key='sub1'
                        title={
                            <span>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </span>
                        }
                    >
                        <Menu.Item key="logOut">
                            <Link to="/login">退出</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="name">你好，<span>{this.state.username}</span></div>
            </Header>
        );
    }
}

export default Top;