import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import myBooks from './books';
import App from '../App';

const reducer = (
  state = {
    books: { books: myBooks, searchQuery: 'Romeo and Juliet' },
  },
) => state;

const store = configureStore({ reducer });

describe('Render Test', () => {
  it('Component renders correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText('Romeo and Juliet')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('clickBook'));
    expect(screen.getByText('Shakespeare, William')).toBeInTheDocument();
  });
});
