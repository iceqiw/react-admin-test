/**
 * Created by 叶子 on 2017/7/30.
 * 接口地址配置文件
 */

//easy-mock模拟数据接口地址
const target = process.env.NODE_ENV === 'development' ? '' : 'http://106.14.188.143/';
const HOST = target+'api/g';

export const TRAIN_CFG_GET_ONE = HOST + '/trainSearch';   

export const TRAIN_CFG_GET_PAGE = HOST + '/trainSearch/page';                      

export const TRAIN_CFG_POST_ADD = HOST + '/trainSearch/add'; 

export const TRAIN_CFG_DEL = HOST + '/trainSearch/del/';  

export const TRAIN_CFG_PUT_EDIT = HOST + '/trainSearch/edit'; 