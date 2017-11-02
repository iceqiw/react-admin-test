/**
 * Created by 叶子 on 2017/7/30.
 */
import { combineReducers } from 'redux';
import * as type from '../action/type';

const handleData = (state = { isFetching: true, data: {} }, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return { ...state, isFetching: true };
        case type.RECEIVE_DATA:
            return { ...state, isFetching: false, data: action.data };
        default:
            return { ...state };
    }
};
const httpData = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return { ...state };
    }
};

const tableData = (state = {}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA_TABLE:
            return {
                ...state,
                [action.category]: []
            };
        case type.RECEIVE_DATA_TABLE:
            return {
                ...state,
                [action.category]: action.data
            };
        default:
            return { ...state };
    }
};

export default combineReducers({
    httpData,
    tableData
});
