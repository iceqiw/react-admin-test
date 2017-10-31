/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../components/BreadcrumbCustom';
import UserTable from '../components/tables/UserTable';
import UserTableR from '../components/tables/UserTableR';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';

class TestPage extends React.Component {
    state = {
        size: 'default',
        loading: false,
        iconLoading: false,
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    };
    handleMenuClick = (e) => {
        console.log('click', e);
    };
    enterLoading = () => {
        this.setState({ loading: true });
    };
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };
    getAuthClick = (e) => {
        const { fetchData, auth } = this.props;
        console.log(auth)
        fetchData({ funcName: 'test', stateName: 'auth' })

    };
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="基础表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="基础表格" bordered={false}>
                                <UserTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="基础表格" bordered={false}>
                                <UserTableR />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToPorps = state => {
    const { auth } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(TestPage);