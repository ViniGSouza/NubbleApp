/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
