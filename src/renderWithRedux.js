import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { combineReducers, createStore } from 'redux';
import reducer from './redux/reducer/passwordReducer';

const rootReducer = combineReducers({ reducer });

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

export default renderWithRedux;
