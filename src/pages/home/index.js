import React, { Component } from 'react';
import { Tooltip } from 'antd'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Tooltip title="prompt text">
                    <span>通知公告</span>
                </Tooltip>
            </div>
        );
    }
}

export default Home;