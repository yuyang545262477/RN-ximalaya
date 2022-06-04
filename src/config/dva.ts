//创建实例

import {create} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import {models} from '../models';

const app = create();
//加载model对象，
models.forEach(model => {
  app.model(model);
});
app.use(createLoading());
//启动dva
app.start();

//导出dva对象
export default app._store;
