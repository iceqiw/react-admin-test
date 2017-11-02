/**
 * Created by hao.cheng on 2017/4/16.
 */
import { get,post } from '../axios/tools';
import * as config from './config';

export const trainCfgPage = () => get({url: config.TRAIN_CFG_GET_PAGE});

export const trainCfgAdd = (params) => post({url: config.TRAIN_CFG_POST_ADD,data:params});
