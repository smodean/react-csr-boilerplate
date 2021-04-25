import { createElement } from 'react';
import ReactDOM from 'react-dom';

import { BrowserApp } from './BrowserApp';

ReactDOM.render(
  createElement(BrowserApp, { }, null),
  document.getElementById('root'),
);
