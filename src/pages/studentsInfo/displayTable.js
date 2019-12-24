import React, { Component } from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { getStudentInfo, addStudentInfo } from '../../actions/actionCreators'
import store from '../../store';
import { connect } from 'react-redux'
import WrappedComModal from './addStuInfoModal'
import WrappedUpdateComModal from './updateStuInfoMadal'

class DisplayTable extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.state.currentPage = 1;
    console.log("store.getState()", this.state)
    this.onChange.bind(this)
    this.columns = [
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
      { title: '系部', dataIndex: 'college', key: 'college' },
      { title: '班级', dataIndex: 'studentClass', key: 'studentClass' },
      { title: '性别', dataIndex: 'sex', key: 'sex' },
      { title: '身份证号', dataIndex: 'idcard', width: 300, key: 'idcard' },
      { title: '民族', dataIndex: 'nation', key: 'nation' },
      { title: '政治', dataIndex: 'politic', key: 'politic' },
      { title: '联系方式', dataIndex: 'phone', key: 'phone' },
      { title: '短号', dataIndex: 'phoneShort', key: 'phoneShort' },
      { title: '职责', dataIndex: 'duty', key: 'duty' },
      { title: '籍贯', dataIndex: 'nativePlace', key: 'nativePlace' },
      { title: '生源地', dataIndex: 'homeAddress', width: 300, key: 'homeAddress' },
      { title: '父母姓名', dataIndex: 'parentName', key: 'parentName' },
      { title: '父母居住地', dataIndex: 'parentLiveplace', key: 'parentLiveplace' },
      { title: '父母联系方式', dataIndex: 'parentPhone', key: 'parentPhone' },
      { title: '备注', dataIndex: 'remark', key: 'remark' },
      {
        title: '修改',
        key: 'update',
        fixed: 'right',
        width: 80,
        render: (text, record) =>
          this.props.studentInfo.length >= 1 ? (
            <div>
              <a onClick={() => this.setVisible(true)}>
                update
              </a>
              <WrappedUpdateComModal
                title="修改学生信息"
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={() => this.setVisible(false)}
                onCreate={() => this.setVisible(false)}
              />
            </div>
          ) : null,
      },
      {
        title: '删除',
        key: 'delete',
        fixed: 'right',
        width: 80,
        render: (text, record) =>
          this.props.studentInfo.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.studentId)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
  }

   // 处理修改学生信息
   setVisible(visible) {
    //  debugger
    this.setState({
      visible: visible,
      modal2Visible: false
    });
  }


  //   删除学生信息
  handleDelete = studentId => {
    const studentInfo = [...this.props.studentInfo];
    // debugger
    this.setState({ studentInfo: studentInfo.filter(item => item.studentId !== studentId) });
  };


  render() {
    const columns = this.columns
    const data = this.state.studentInfo.length >= 1 ? this.state.studentInfo : this.props.studentInfo
    const paginationProps = {
      current: this.state.currentPage,
      onChange: this.onChange,
      total: 500,
    }
    return (
      <div>
        <Button
          onClick={() => this.setModal2Visible(true)}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          新增
        </Button>
        <WrappedComModal
          title="新增学生信息"
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.modal2Visible}
          onCancel={() => this.setModal2Visible(false)}
          onCreate={this.handleCreate}
        />
        <Table columns={columns} dataSource={data} scroll={{ x: 2500 }}
          pagination={paginationProps}
        />
      </div>
    )
  }


  // 处理新增学生信息
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      let params = values
      const action = addStudentInfo(params)
      store.dispatch(action)
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ modal2Visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };


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
    const action = getStudentInfo(params)
    store.dispatch(action)
  };

  // 挂载成功时请求学生基本数据
  componentDidMount() {
    console.log("qqq", this.state)
    let params = {
      pageNum: 1,
      pageSize: 10
    }
    const action = getStudentInfo(params)
    store.dispatch(action)
  }

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

export default connect(stateToProps, dispatchToProps)(DisplayTable)
