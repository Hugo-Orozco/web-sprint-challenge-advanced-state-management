import React from 'react';
import { render, screen } from '@testing-library/react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

import AddForm from './AddForm';

test('Render component.', () => {
  render(<Provider store={store}><AddForm /></Provider>);
});

test('Render form header.', () => {
  render(<Provider store={store}><AddForm /></Provider>);
  const header = screen.getByText('Add Smurf');
  expect(header).toBeInTheDocument();
});

test('Test for error on submit.', () => {
  render(<Provider store={store}><AddForm /></Provider>);
  const submit = screen.getByRole('button', { type: 'submit' });
  submit.click();
  const error = screen.getByTestId('errorAlert');
  expect(error).toHaveTextContent('Error: Name, position and nickname fields are required.');
});
