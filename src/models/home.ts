import { Effect, Model } from "dva-core-ts";
import { Reducer } from "react";

interface HomeState {
  num: number;
}

interface HomeModel extends Model {
  namespace: string;
  state: HomeState;
  reducers: {
    add: Reducer<HomeState, any>;
  };
  effects: {
    asyncAdd: Effect;
  };
}

const initState: HomeState = {
  num: 100,
};

function delayTime(number: number) {
  return new Promise(resolve => {
    setTimeout(resolve, number);
  });
}

const homeModel: HomeModel = {
  namespace: "home",
  state: initState,
  reducers: {
    add(state = initState, { payload: { num } = { num: 10 } }: any) {
      return {

        ...state,
        num: state.num + num,
      };
    },
  },
  effects: {
    * asyncAdd({ payload }, { call, put }: any) {
      yield call(delayTime, 1000);
      yield put({ type: "add", payload });
    },
  },
};

export default homeModel;
