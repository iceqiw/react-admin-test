/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col, Card, Button,Modal,Input } from 'antd';
import BreadcrumbCustom from '../components/BreadcrumbCustom';
import TrainCfgTable from '../components/tables/TrainCfgTable';
import * as api from '../api/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDataTable } from '@/action';
const editData = {};

class TrainSearch extends React.Component {
    state = {
        data: [],
        visible: false
    };
    onSearch = () => {
        const { fetchDataTable } = this.props;
        fetchDataTable({ funcName: 'trainCfgPage', stateName: 'traincfg' })
    };

    changeValue = (type, event)=>{  
        editData[type]= event.target.value
        this.setState({
            ...editData
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        api['trainCfgAdd'](editData).then(res => {
            console.log(res)
        });
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
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="12306" second="火车票查询配置" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="查询条件配置" bordered={false}>
                                <div className="table-operations">
                                    <Button onClick={this.onSearch}>Sort age</Button>
                                    <Button onClick={this.showModal}>异步关闭</Button>
                                    <Button onClick={this.onSearch}>Clear filters and sorters</Button>
                                </div>
                                <TrainCfgTable />
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Modal title="Title of the modal dialog"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Input value={this.state.trainNo} onChange={this.changeValue.bind(this,'trainNo')} />
                    <Input value={this.state.date} onChange={this.changeValue.bind(this,'date')} />
                    <Input value={this.state.startStation} onChange={this.changeValue.bind(this,'startStation')} />
                    <Input value={this.state.endStation} onChange={this.changeValue.bind(this,'endStation')} />
                </Modal>
            </div>
        )
    }
}

const mapStateToPorps = state => {
    return {};
};

const mapDispatchToProps = dispatch => ({
    fetchDataTable: bindActionCreators(fetchDataTable, dispatch)
});

export default connect(mapStateToPorps, mapDispatchToProps)(TrainSearch);