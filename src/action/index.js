/**
 * Created by 叶子 on 2017/7/30.
 */
import * as type from './type';
import * as http from '../axios/index';
import * as api from '../api/index';

const requestData = category => ({
    type: type.REQUEST_DATA,
    category
});
export const receiveData = (data, category) => ({
    type: type.RECEIVE_DATA,
    data,
    category
});

/**
 * 请求数据调用方法
 * @param funcName      请求接口的函数名
 * @param params        请求接口的参数
 */
export const fetchData = ({funcName, params, stateName}) => dispatch => {
    !stateName && (stateName = funcName);
    dispatch(requestData(stateName));
    return http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
};

const requestDataTable = category => ({
    type: type.REQUEST_DATA_TABLE,
    category
});

export const receiveDataTable = (data, category) => ({
    type: type.RECEIVE_DATA_TABLE,
    data,
    category
});

export const fetchDataTable = ({funcName, params, stateName}) => dispatch => {
    dispatch(requestDataTable(stateName));
    return api[funcName](params).then(res => dispatch(receiveDataTable(res, stateName)));
};