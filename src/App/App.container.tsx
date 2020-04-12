import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Routes from '@Routes';

import configureStore from '@store/configureStore';

import AppHead from './AppHead';

const { store } = configureStore();

const App: FC = () => (
  <Provider store={store}>
    <AppHead />
    <Routes />
  </Provider>
);

export default App;
