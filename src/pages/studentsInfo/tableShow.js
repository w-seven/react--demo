import React, { Component } from 'react';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';

import './tableShow.css'

const ResizeableTitle = props => {
    const { onResize, width, ...restProps } = props;
    console.log("props", props)

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

class InfoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '审核状态',
                    dataIndex: 'name',
                },
                {
                    title: '学号',
                    dataIndex: 'studentid',
                },
                {
                    title: '姓名',
                    dataIndex: 'name',
                },
                {
                    title: '系部',
                    dataIndex: 'age',
                },
                {
                    title: '专业',
                    dataIndex: '1',
                },
                {
                    title: '班级',
                    dataIndex: '2',
                },
                {
                    title: '性别',
                    dataIndex: '3',
                },
                {
                    title: '身份证号',
                    dataIndex: '4',
                },
                {
                    title: '民族',
                    dataIndex: '5',
                },
                {
                    title: '联系方式',
                    dataIndex: '6',
                },
                {
                    title: '籍贯',
                    dataIndex: '7',
                },
                {
                    title: '生源地',
                    dataIndex: '8',
                },
                {
                    title: '宗教信仰',
                    dataIndex: '9',
                },
            ]
        }
    }

    components = {
        header: {
            cell: ResizeableTitle,
        },
    };

    data = []

    handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return { columns: nextColumns };
        });
    };


    render() {
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));
        return (
           <div id='#components-table-demo-resizable-column'>
                <Table bordered components={this.components} columns={columns} dataSource={this.data} />
           </div>
        );
    }
}

export default InfoDisplay;