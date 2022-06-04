import * as React from 'react';
import {Provider} from 'react-redux';
import Navigator from './navigator';
import store from './config/dva';
export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
