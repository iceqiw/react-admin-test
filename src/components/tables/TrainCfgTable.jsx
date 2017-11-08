/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Card, Button, Modal, Input } from 'antd';
import { connect } from 'react-redux';
import * as api from '@/api/index';
import { bindActionCreators } from 'redux';
import { fetchDataTable } from '@/action';

class TrainCfgTable extends React.Component {

    state = {
        data: [],
        visible: false,
        editCfg: {},
        isEdit:false
    };

    componentDidMount() {
        const { fetchDataTable } = this.props;
        fetchDataTable({ funcName: 'trainCfgPage', stateName: 'traincfg' })
    };

    onSearch = () => {
        const { fetchDataTable } = this.props;
        fetchDataTable({ funcName: 'trainCfgPage', stateName: 'traincfg' })
    };

    changeValue = (type, event) => {
        var record=this.state.editCfg
        record[type]=event.target.value
        this.setState({
            editCfg:{...record}
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
            isEdit:false,
            editCfg:{}
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        if (this.state.isEdit) {
            api['trainCfgEdit'](this.state.editCfg).then(res => {
                console.log(res)
            });
        } else {
            api['trainCfgAdd'](this.state.editCfg).then(res => {
                console.log(res)
            });
        }
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    editSource = (record, event) => {
        console.log(record)
        this.setState({
            editCfg: { ...record },
            isEdit:true,
            visible: true
        })
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
            <div className="gutter-box">
                <Card title="查询条件配置" bordered={false}>
                    <div className="table-operations">
                        <Button onClick={this.onSearch}>Search</Button>
                        <Button onClick={this.showModal}>showModal</Button>
                        <Button onClick={this.onSearch}>Clear filters and sorters</Button>
                    </div>
                    <Table columns={columns} dataSource={this.props.traincfg} rowKey={record => record.id} />
                </Card>

                <Modal title="Title of the modal dialog"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder="trainNo" value={this.state.editCfg.trainNo} onChange={this.changeValue.bind(this, 'trainNo')} />
                    <Input placeholder="date" value={this.state.editCfg.date} onChange={this.changeValue.bind(this, 'date')} />
                    <Input placeholder="startStation" value={this.state.editCfg.startStation} onChange={this.changeValue.bind(this, 'startStation')} />
                    <Input placeholder="endStation" value={this.state.editCfg.endStation} onChange={this.changeValue.bind(this, 'endStation')} />
                </Modal>
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