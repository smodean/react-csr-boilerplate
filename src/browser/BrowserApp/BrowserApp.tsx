import { App } from '@shared/App';
import { ConfigureStore } from '@shared/store';

import { FC } from 'react';

const configureStore = new ConfigureStore();

configureStore.runEpic();

export const BrowserApp: FC = () => <App store={configureStore.store} />;

BrowserApp.displayName = 'BrowserApp';
