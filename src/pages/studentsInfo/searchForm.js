import React, { Component } from 'react';
import { Form, Row, Col, Input, Button } from 'antd'

import './searchForm.css'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }

    getFields() {
        const count = 8;
        const { getFieldDecorator } = this.props.form;
        const labelNames = ['系部', '专业', '班级', '姓名', '学号', '辅导员', '班主任', '公寓及寝室号']
        const children = [];
        for (let i = 0; i < 8; i++) {
            children.push(
                <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={labelNames[i]}>
                        {getFieldDecorator(labelNames[i], {
                            rules: [
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ],
                        })(<Input placeholder="必填项" />)}
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        })
    }

    handleReset = () => {
        this.props.form.resetFields();
    }


    render() {
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={10}>{this.getFields()}</Row>
                <Row>
                    <Col span={12} style={{ textAlign: 'left' }}>
                        <Button type="primary">
                            提交/审核
                        </Button>
                        <Button type="primary" style={{ marginLeft: 8 }}>
                            驳回
                        </Button>
                        <Button style={{ marginLeft: 8 }}>
                            批量导出
                        </Button>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            取消
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const WrappedSearchForm = Form.create({ name: 'advanced_search' })(SearchForm);

export default WrappedSearchForm;