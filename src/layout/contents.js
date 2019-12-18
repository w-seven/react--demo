import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Loadable from 'react-loadable'
import './contents.css'

const { Content } = Layout
const Loading = ()=>(<div>Loading...</div>)

const Home = Loadable({
    loader: () => import('../pages/home'),
    loading: Loading
})

const UserInfo = Loadable({
    loader: () => import('../pages/home'),
    loading: Loading
})

const RoleInfo = Loadable({
    loader: () => import('../pages/home'),
    loading: Loading
})

const Template = Loadable({
    loader: () => import('../pages/home'),
    loading: Loading
})

const BaskInfo = Loadable({
    loader: () => import('../pages/studentsInfo'),
    loading: Loading
})
const GradeInfo = Loadable({
    loader: () => import('../pages/home'),
    loading: Loading
})

// const Home = () => (
//     <div>home</div>
// )

const Contents = () => (
    <Content className="content" id="content">
       <Switch>
           <Route path="/home" component={Home} />
           <Route path="/userInfo" component={UserInfo} />
           <Route path="/roleInfo" component={RoleInfo} />
           <Route path="/template" component={Template} />
           <Route path="/baskInfo" component={BaskInfo} />
           <Route path="/gradeInfo" component={GradeInfo} />
       </Switch>
    </Content>
)

export default Contents