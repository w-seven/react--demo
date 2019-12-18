import React, { Component } from 'react';
import { Table } from 'antd'
// import InfoDisplay from './tableShow'
import SearchForm from './searchForm'

const columns = [
    {
        title: '学号',
        dataIndex: 'studentid',
        width: 100
    },
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '系部',
        dataIndex: 'department',
        width: 50
    },
    {
        title: '专业',
        dataIndex: 'major',
    },
    {
        title: '班级',
        dataIndex: 'class',
    },
    {
        title: '性别',
        dataIndex: 'gender',
        width: 50
    },
    {
        title: '身份证号',
        dataIndex: 'id',
    },
    {
        title: '民族',
        dataIndex: 'national',
        width: 50
    },
    {
        title: '联系方式',
        dataIndex: 'tel',
    },
    {
        title: '籍贯',
        dataIndex: 'nativePlace',
    },
    {
        title: '生源地',
        dataIndex: 'address',
    },
];
const data = [
    {
        studentid: '2019097867',
        name: 'wangxiaowo',
        department: '数理系',
        major: '软件工程',
        class: '计科N181',
        gender: '女',
        id: '33078978297739',
        national: '汉',
        tel: '15858456789',
        nativePlace: '嘉兴',
        address: '浙江嘉兴',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class BaskInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <SearchForm />
                <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
            </div>
        );
    }
}

export default BaskInfo;