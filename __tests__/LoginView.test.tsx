import React from 'react';
import { render } from '@testing-library/react-native';
import { LoginView } from '../views/LoginView/LoginView';

test('renders correctly', () => {
  const { getByTestId } = render(<LoginView />);
  const textElement = getByTestId('LoginView');
  expect(textElement).toBeTruthy();
});