import { createElement } from 'react';
import ReactDOM from 'react-dom';

import App from '@App';

ReactDOM.render(
  createElement(App, {}, null),
  document.getElementById('root'),
);
