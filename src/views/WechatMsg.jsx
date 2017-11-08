/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col} from 'antd';
import BreadcrumbCustom from '../components/BreadcrumbCustom';
import WechatMsgTable from '../components/tables/WechatMsgTable';


class WechatMsg extends React.Component {
    
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="微信" second="微信消息配置" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <WechatMsgTable />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default WechatMsg;