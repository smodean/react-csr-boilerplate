import { App } from '@shared/App';

import { createElement } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  createElement(App, {}, null),
  document.getElementById('root'),
);
