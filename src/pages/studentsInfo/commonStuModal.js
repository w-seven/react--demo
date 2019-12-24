// 已废除

import React, { Component } from 'react';
import { Modal } from 'antd';
import ComStuForm from './commonStuForm'

class CommonModal extends Component {
    constructor(props) {
        super(props);
        console.log("modal",this.state)
        this.state = {
            visible: this.props.visible
        }
        console.log("modal",this.state)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <Modal
                    title={this.props.title}
                    width={800}
                    centered
                    visible={this.props.visible}
                    onOk={this.props.Ok}
                    onCancel={this.props.Cancel}
                >
                    <ComStuForm />
                </Modal>
            </div>
        );
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
}

export default CommonModal;