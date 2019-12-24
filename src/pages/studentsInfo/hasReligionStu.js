import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux'
import store from '../../store';
import { getStudentHasReligionInfo } from '../../actions/actionCreators'

const columns = [
    {
        title: '姓名',
        width: 100,
        dataIndex: 'studentName',
        key: 'studentName',
        fixed: 'left',
    },
    {
        title: '学号',
        width: 130,
        dataIndex: 'studentId',
        key: 'studentId',
        fixed: 'left',
    },
    { title: '班级', dataIndex: 'studentClass', key: 'studentClass' },
    { title: '性别', dataIndex: 'sex', key: 'sex' },
    { title: '系部', dataIndex: 'college', key: 'college' },
    { title: '政治面貌', dataIndex: 'politic', key: 'politic' },
    { title: '联系方式', dataIndex: 'phone',width:130, key: 'phone' },
    { title: '生源地', dataIndex: 'nativePlace',width:200, key: 'nativePlace' },
    { title: '开始信教时间', dataIndex: 'startBelief',width:200, key: 'startBelief' },
    { title: 'religiousRally', dataIndex: 'religiousRally',width:200, key: 'religiousRally' },
    { title: '谈话记录', dataIndex: 'conversation',width:400, key: 'conversation' },
    { title: '出国记录', dataIndex: 'abroad',width:200, key: 'abroad' },
    { title: '父母居住地址', dataIndex: 'parentLiveplace',width:300, key: 'parentLiveplace' },
    { title: '父母联系方式', dataIndex: 'parentPhone',width:130, key: 'parentPhone' },
    { title: '标记', dataIndex: 'remark', key: 'remark' },
    {
        title: '宗教信仰',
        width: 100,
        dataIndex: 'religion',
        key: 'religion',
        fixed: 'right',
    },
];

class HasReligionStudent extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.state.currentPage = 1
        console.log("wabf",this.props)
    }

    componentDidMount(){
        let params = {
            pageNum: 1,
            pageSize: 10
        }
        const action = getStudentHasReligionInfo(params)
        store.dispatch(action)
    }

    render() {
        const paginationProps = {
            current: this.state.currentPage,
            onChange: this.onChange,
            total: 500,
          }
        return (
            <div>
                <Table columns={columns} dataSource={this.props.studenHasReligionInfo} scroll={{ x: 2800 }}
                    pagination={paginationProps}
                />
            </div>
        );
    }

    // 改变页数
  onChange = page => {
    console.log(page);
    this.setState({
      currentPage: page,
    })
    let params = {
      pageNum: page,
      pageSize: 10
    }
    const action = getStudentHasReligionInfo(params)
    store.dispatch(action)
  };
}

const dispatchToProps = (dispatch) => {
    return {
  
    }
  }

const stateToProps = (state) => {
    return {
      ...state
    }
  }

export default connect(stateToProps, dispatchToProps)(HasReligionStudent);