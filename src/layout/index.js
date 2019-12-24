import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Layout, Menu, Icon } from 'antd'
import menuList from '../utils/menuList'
import Contents from './contents'
import Header from './header'
import './index.css'

const { Footer, Sider } = Layout
const { SubMenu } = Menu

class BasicLayout extends Component {
    state = {
        collapsed: false
    }

    onCollapse = collapsed => {
        console.log(collapsed)
        this.setState({ collapsed })
    }
    render() {
        console.log(this.props)
        return (
            <Layout className="container-all">
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}><div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className="menu">
                        {menuList.map((subMenu) => {
                            if(subMenu.children && subMenu.children.length){
                                return (
                                    <SubMenu 
                                        key={subMenu.url}
                                        title={
                                            <span>
                                                <Icon type={subMenu.icon}/>
                                                <span>{subMenu.name}</span>
                                            </span>
                                        }>
                                        {subMenu.children.map((menu) => (
                                            <Menu.Item key={menu.url}>
                                                <Link to={`/${menu.url}`}>{menu.name}</Link>
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                )
                            }else{
                                return (
                                    <Menu.Item key={subMenu.url}>
                                         <Link to={`/${subMenu.url}`}>
                                                <Icon type={subMenu.icon}/>
                                                <span>{subMenu.name}</span>
                                         </Link>
                                    </Menu.Item>
                                )
                            }
                           
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header />
                    <Contents />
                    <Footer style={{ textAlign: 'center'}}>©2019 Created by wangxiaowo</Footer>
                </Layout>
            </Layout>
        )
    }

    componentDidMount(){
        console.log("basklayout", this.props)
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);