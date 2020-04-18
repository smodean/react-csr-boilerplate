import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from '@App';

describe('src/App/App.container.tsx', () => {
  test('snapshot', () => {
    const appRender = TestRenderer.create(<App />);

    const tree = appRender.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('children', () => {
    const appRender = TestRenderer.create(<App />);
    const appInstance = appRender.root;

    expect(appInstance.children.length).toBe(1);
  });
});
