/**
 * Created by 叶子 on 2017/7/30.
 * http通用工具函数
 */
import axios from 'axios';
import { message } from 'antd';

export const get = ({ url, msg = '接口异常', headers }) =>
    axios.get(url, headers).then(res => res.data).catch(err => {
        console.log(err);
        message.warn(msg);
    });

export const post = ({ url, param, msg = '接口异常', headers }) =>
    axios.post(url, param, headers).then(res => res.data).catch(err => {
        console.log(err);
        message.warn(msg);
    });

export const del = ({ url, msg = '接口异常', headers }) =>
    axios.delete(url, headers).then(res => res.data).catch(err => {
        console.log(err);
        message.warn(msg);
    });
