/**
 * Created by hao.cheng on 2017/4/16.
 */
import { get, post, del, put } from '../axios/tools';
import * as config from './config';

export const wechatMsgPage = () => get({ url: config.WECHATMSG_GET_PAGE });

export const wechatMsgAdd = (params) => post({ url: config.WECHATMSG_POST_ADD, param: params });

export const wechatMsgDel = (params) => del({ url: config.WECHATMSG_DEL + params.id });

export const wechatMsgEdit = (params) => put({ url: config.WECHATMSG_PUT_EDIT, param: params });


export const trainCfgPage = () => get({ url: config.TRAIN_CFG_GET_PAGE });

export const trainCfgAdd = (params) => post({ url: config.TRAIN_CFG_POST_ADD, param: params });

export const trainCfgDel = (params) => del({ url: config.TRAIN_CFG_DEL + params.id });

export const trainCfgEdit = (params) => put({ url: config.TRAIN_CFG_PUT_EDIT, param: params });
