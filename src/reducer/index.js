/**
 * Created by 叶子 on 2017/7/30.
 */
import { combineReducers } from 'redux';
import * as type from '../action/type';

const handleData = (state = { isFetching: true, data: {} }, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            console.log(3)
            return { ...state, isFetching: true };
        case type.RECEIVE_DATA:
            console.log(33)
            return { ...state, isFetching: false, data: action.data };
        default:
            return { ...state };
    }
};
const httpData = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            console.log(22)
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        case type.REQUEST_DATA_LIST:
            return {
                ...state,
                [action.category]: action.data
            };
        default:
            return { ...state };
    }
};

export default combineReducers({
    httpData
});
