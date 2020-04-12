import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Routes from '@Routes';

import configureStore from '@store/configureStore';

const { store } = configureStore();

const App: FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
