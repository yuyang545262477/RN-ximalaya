import {Model} from 'dva-core-ts';
import {DvaLoadingState} from 'dva-loading-ts';
import homeModel from './home';

export type RootState = {
  home: typeof homeModel.state;
  loading: DvaLoadingState;
};
export const models: Model[] = [homeModel];
