import React, { Component } from 'react'
import { Form, Input, Select, Modal } from 'antd'

const { Option } = Select

class ComAddStuForm extends Component {

    render() {
        const { visible, onCancel, onCreate, form, title } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div>
                <Modal
                    title={title}
                    width={800}
                    centered
                    okText="新增"
                    visible={visible}
                    onOk={onCreate}
                    onCancel={onCancel}
                >
                <Form layout="inline">
                    <Form.Item label="姓名">
                        {getFieldDecorator('studentName', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="学号">
                        {getFieldDecorator('studentId', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="性别">
                        {getFieldDecorator('sex', {
                            initialValue: '男'
                        })(
                            <Select style={{ width: 70 }}>
                                <Option value="男">男</Option>
                                <Option value="女">女</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="身份证号">
                        {getFieldDecorator('idcard', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="民族">
                        {getFieldDecorator('nation', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="系部">
                        {getFieldDecorator('college', {
                           initialValue: '商学系'
                        })(
                            <Select style={{ width: 100 }}>
                                <Option value="商学系">商学系</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="政治">
                        {getFieldDecorator('politic')(<Input />)}
                    </Form.Item>
                    <Form.Item label="联系方式">
                        {getFieldDecorator('phone')(<Input />)}
                    </Form.Item>
                    <Form.Item label="短号">
                        {getFieldDecorator('phoneShort')(<Input />)}
                    </Form.Item>
                    <Form.Item label="职责">
                        {getFieldDecorator('duty')(<Input />)}
                    </Form.Item>
                    <Form.Item label="生源地">
                        {getFieldDecorator('homeAddress')(<Input />)}
                    </Form.Item>
                    <Form.Item label="父母姓名">
                        {getFieldDecorator('parentName')(<Input />)}
                    </Form.Item>
                    <Form.Item label="父母居住地">
                        {getFieldDecorator('parentLiveplace')(<Input />)}
                    </Form.Item>
                    <Form.Item label="父母联系方式">
                        {getFieldDecorator('parentPhone')(<Input />)}
                    </Form.Item>
                    <Form.Item label="备注">
                        {getFieldDecorator('remark')(<Input type="textarea" />)}
                    </Form.Item>
                </Form>
                </Modal>
            </div>
        );
    }

}
const WrappedComModal = Form.create({ name: 'form_in_modal' })(ComAddStuForm);

export default WrappedComModal;