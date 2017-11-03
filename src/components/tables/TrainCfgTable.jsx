/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import * as api from '@/api/index';
import { bindActionCreators } from 'redux';
import { fetchDataTable } from '@/action';

class TrainCfgTable extends React.Component {

    editSource = (record, event) => {
        console.log(record)
    };

    delSource = (record, event) => {
        console.log(record)
        const { fetchDataTable } = this.props;
        api['trainCfgDel'](record).then(res => {
            console.log(res)        
            fetchDataTable({ funcName: 'trainCfgPage', stateName: 'traincfg' })
        });
    };

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
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (  //塞入内容
                <span>
                    <a onClick={this.editSource.bind(this, record)}>编辑</a>|
                    <a onClick={this.delSource.bind(this, record)}>删除</a>
                </span>
            ),
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

const mapDispatchToProps = dispatch => ({
    fetchDataTable: bindActionCreators(fetchDataTable, dispatch)
});

export default connect(mapStateToPorps, mapDispatchToProps)(TrainCfgTable);