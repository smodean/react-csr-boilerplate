import { Routes } from '@shared/Routes';

import { FC } from 'react';
import { Provider } from 'react-redux';

import { AppProps } from './App.types';
import { AppHead } from './AppHead';

export const App: FC<AppProps> = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <AppHead />
      <Routes />
    </Provider>
  );
};

App.displayName = 'App';
