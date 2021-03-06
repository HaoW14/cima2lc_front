import { Effect, history, Reducer } from 'umi';
import { message } from 'antd';
import { querydetail } from './service';
import moment from 'moment';

export interface StateType {
  code?: 200;
  data?: {};
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    detail: Effect;
  };
  reducers: {
    getDetail: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'crfDetail',

  state: {
    data: undefined,
  },

  effects: {
    *detail({ payload }, { call, put }) {
      const response = yield call(querydetail, payload);
      yield put({
        type: 'getDetail',
        payload: response,
      });
    },
  },
  reducers: {
    getDetail(state, { payload }) {
      if (payload.code == 200) {
        var patient = payload.data.Patient[0];
        if (patient['birthday'])
          patient['birthday'] = moment(patient['birthday']);
        patient['gender'] = patient['gender'] == 1 ? true : false;
        payload.data['Patient'] = patient;
        //处理随访信息
        // var follinfo_list = payload.data.FollInfo;
        // var new_follinfo_list=[];
        // follinfo_list.map(item=>{
        //   const path = item['savFilPath'].split(',');
        //   const filename = path[path.length-1];
        //   defaultFileList
        //   defaultFileList.push({
        //     uid: `${index}`,
        //     name: filename,
        //     status: 'done',
        //     url: `http://localhost:8088/file/${item['pid']}/${filename}`,
        //   });

        //   new_follinfo_list.push(item);
        // });
        // payload.data['FollInfo'] = new_follinfo_list;
        return { ...state, data: payload.data };
      } else {
        return { ...state, data: undefined };
      }
    },
  },
};

export default Model;
