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

const StudentInfo = Loadable({
    loader: () => import('../pages/studentsInfo'),
    loading: Loading
})

const APoorStudentInfo = Loadable({
    loader: () => import('../pages/studentsInfo/aPoorStudent'),
    loading: Loading
})

const LearnDifficultStuInfo = Loadable({
    loader: () => import('../pages/studentsInfo/stuLearnDifficultInfo'),
    loading: Loading
})

const StuAnomieInfo = Loadable({
    loader: () => import('../pages/studentsInfo/stuAnomie'),
    loading: Loading
})

const StuhasReligionInfo = Loadable({
    loader: () => import('../pages/studentsInfo/hasReligionStu'),
    loading: Loading
})

const StuMinorityInfo = Loadable({
    loader: () => import('../pages/studentsInfo/minorityStu'),
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
           <Route path="/studentInfo" component={StudentInfo} />
           <Route path="/religion" component={StuhasReligionInfo} />
           <Route path="/minority" component={StuMinorityInfo} />
           <Route path="/anomie" component={StuAnomieInfo} />
           <Route path="/learnDifficultStu" component={LearnDifficultStuInfo} />
           <Route path="/ApoorStu" component={APoorStudentInfo} />
           <Route path="/ApoorStu" component={APoorStudentInfo} />
           <Route path="/summaryData" component={GradeInfo} />
       </Switch>
    </Content>
)

export default Contents