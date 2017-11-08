/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Card, Button, Modal, Input } from 'antd';
import { connect } from 'react-redux';
import * as api from '@/api/index';
import { bindActionCreators } from 'redux';
import { fetchDataTable } from '@/action';

class WechatMsgTable extends React.Component {

    state = {
        data: [],
        visible: false,
        editCfg: {},
        isEdit:false
    };

    componentDidMount() {
        const { fetchDataTable } = this.props;
        fetchDataTable({ funcName: 'wechatMsgPage', stateName: 'wechatMsg' })
    };

    onSearch = () => {
        const { fetchDataTable } = this.props;
        fetchDataTable({ funcName: 'wechatMsgPage', stateName: 'wechatMsg' })
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
            api['wechatMsgEdit'](this.state.editCfg).then(res => {
                console.log(res)
            });
        } else {
            api['wechatMsgAdd'](this.state.editCfg).then(res => {
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
        api['wechatMsgDel'](record).then(res => {
            console.log(res)
            fetchDataTable({ funcName: 'wechatMsgPage', stateName: 'wechatMsg' })
        });
    };

    render() {
        const columns = [{
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '标记',
            dataIndex: 'keyword',
            key: 'keyword',
        }, {
            title: '返回信息',
            dataIndex: 'content',
            key: 'content'
        },{
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
                    </div>
                    <Table columns={columns} dataSource={this.props.wechatMsg} rowKey={record => record.id} />
                </Card>

                <Modal title="Title of the modal dialog"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder="keyword" value={this.state.editCfg.keyword} onChange={this.changeValue.bind(this, 'keyword')} />
                    <Input placeholder="content" value={this.state.editCfg.content} onChange={this.changeValue.bind(this, 'content')} />
                 </Modal>
            </div>
        );
    }
}

const mapStateToPorps = state => {
    const { wechatMsg } = state.tableData;
    return { wechatMsg };
};

const mapDispatchToProps = dispatch => ({
    fetchDataTable: bindActionCreators(fetchDataTable, dispatch)
});

export default connect(mapStateToPorps, mapDispatchToProps)(WechatMsgTable);