import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Books from '../components/Books';
import myBooks from './books';

const reducer = (
  state = {
    books: { books: myBooks, searchQuery: 'Romeo and Juliet' },
  },
) => state;

const store = configureStore({ reducer });
describe('Render Test', () => {
  it('Component renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <Provider store={store}>
          <Books />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
