import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Layout from '../layout'
import Login from '../components/login'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const { location } = history

const routers = (
    <Router history={history}>
        {/* <Switch> */}
            <Route path="/" component={Layout} />
            <Route path="/login" component={Login} />
            {/* {location.hash === '#/' ? <Redirect to="/login" /> : ''} */}
        {/* </Switch> */}
    </Router>

)

export default routers