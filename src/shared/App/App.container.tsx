import { Routes } from '@shared/Routes';
import { ConfigureStore } from '@shared/store';

import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { AppHead } from './AppHead';

const configureStore = new ConfigureStore();

configureStore.runEpic();

export const App: FC = () => (
  <Provider store={configureStore.store}>
    <AppHead />
    <Routes />
  </Provider>
);

App.displayName = 'App';