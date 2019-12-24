import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux'
import store from '../../store';
import { getStudentALevelInfo } from '../../actions/actionCreators'

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
    { title: 'measure', dataIndex: 'measure', width:500, key: 'measure' },
    { title: '责任人', dataIndex: 'personResponsible',width:200, key: 'personResponsible' },
    { title: '联系方式', dataIndex: 'phone', key: 'phone' },
    { title: '存在问题', dataIndex: 'problems',width:300, key: 'problems' },
    { title: '标记', dataIndex: 'remark', key: 'remark' },
    {
        title: '贫困等级',
        width: 100,
        dataIndex: 'careType',
        key: 'careType',
        fixed: 'right',
    },
];

class APoorStudent extends Component {
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
        const action = getStudentALevelInfo(params)
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
                <Table columns={columns} dataSource={this.props.studenALeveltInfo} scroll={{ x: 1800 }}
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
    const action = getStudentALevelInfo(params)
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

export default connect(stateToProps, dispatchToProps)(APoorStudent);