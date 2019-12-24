import React, { Component } from 'react';
import SearchForm from './searchForm'
import DisplayTable from './displayTable'


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
                {/* <Table columns={columns} dataSource={data} rowSelection={rowSelection} /> */}
                <DisplayTable />
            </div>
        );
    }
}

export default BaskInfo;