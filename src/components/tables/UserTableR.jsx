/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDataTable } from '@/action';

class UserTableR extends React.Component {
    state = {
        filterDropdownVisible: false,
        data: [],
        searchText: '',
        filtered: false,
    };
    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    };
    onSearch = () => {
        const { fetchData } = this.props;
        fetchData({ funcName: 'test', stateName: 'test' })
    };
    render() {
        const columns = [{
            title: 'Id',
            dataIndex: 'Id',
            key: 'Id'
        }, {
            title: 'Username',
            dataIndex: 'Username',
            key: 'Username'
        }, {
            title: 'Password',
            dataIndex: 'Password',
            key: 'Password'
        }];

        return (
            <div>
                <Button type="primary" onClick={this.onSearch}>Search</Button>
                <Table columns={columns} dataSource={this.props.test} rowKey={record => record.Id} />
                <style>{`
                    .custom-filter-dropdown {
                      padding: 8px;
                      border-radius: 6px;
                      background: #fff;
                      box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
                    }
                    .custom-filter-dropdown input {
                      width: 130px;
                      margin-right: 8px;
                    }
                    .highlight {
                      color: #f50;
                    }
                `}</style>
            </div>
        );
    }
}

const mapStateToPorps = state => {
    const { test } = state.httpData;
    return { test };
};

const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchDataTable, dispatch)
});

export default connect(mapStateToPorps, mapDispatchToProps)(UserTableR);