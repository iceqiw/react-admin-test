/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';

class TrainCfgTable extends React.Component {
    render() {
        const columns = [{
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '车次',
            dataIndex: 'trainNo',
            key: 'trainNo',
        }, {
            title: '日期',
            dataIndex: 'date',
            key: 'date'
        }, {
            title: '始发站代码',
            dataIndex: 'startStation',
            key: 'startStation'
        }, {
            title: '到达站代码',
            dataIndex: 'endStation',
            key: 'endStation'
        }];

        return (
            <div>
                <Table columns={columns} dataSource={this.props.traincfg} rowKey={record => record.id} />
            </div>
        );
    }
}

const mapStateToPorps = state => {
    const { traincfg } = state.tableData;
    return { traincfg };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToPorps, mapDispatchToProps)(TrainCfgTable);