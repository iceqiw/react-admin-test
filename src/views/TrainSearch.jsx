/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col} from 'antd';
import BreadcrumbCustom from '../components/BreadcrumbCustom';
import TrainCfgTable from '../components/tables/TrainCfgTable';


class TrainSearch extends React.Component {
    
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="12306" second="火车票查询配置" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <TrainCfgTable />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TrainSearch;