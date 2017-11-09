/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col} from 'antd';
import BreadcrumbCustom from '../components/BreadcrumbCustom';
import WechatTplTable from '../components/tables/WechatTplTable';


class WechatTpl extends React.Component {
    
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="微信" second="微信消息配置" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <WechatTplTable />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default WechatTpl;