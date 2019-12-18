import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routers'
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
// import createHistory from 'history/createHashHistory'
import store from './store'

// const history = createHistory()

const App = (
    <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
            <div>
                {routes}
            </div>
        {/* </ConnectedRouter> */}
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'))