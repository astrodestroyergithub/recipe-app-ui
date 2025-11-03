import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../store/recipeSlice';
import SearchBar from '../components/SearchBar.jsx';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('SearchBar Component', () => {
  let store;

  beforeEach(() => {
    // Create a new store for each test with initial state
    const originalStore = configureStore({
      reducer: {
        recipes: recipeReducer
      },
      preloadedState: {
        recipes: {
          searchResults: [],
          loading: false,
          error: null
        }
      }
    });

    store = {
      ...originalStore,
      dispatch: jest.fn(originalStore.dispatch)
    };

    // Clear navigation mock
    mockNavigate.mockClear();
  });

  it('renders search input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText('Search for recipes or cuisines...')).toBeInTheDocument();
  });

  it('shows loading state while searching', async () => {
    const originalStore = configureStore({
      reducer: {
        recipes: recipeReducer
      },
      preloadedState: {
        recipes: {
          searchResults: [],
          loading: true,
          error: null
        }
      }
    });

    store = {
      ...originalStore,
      dispatch: jest.fn(originalStore.dispatch)
    };
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays search results', () => {
    const originalStore = configureStore({
      reducer: {
        recipes: recipeReducer
      },
      preloadedState: {
        recipes: {
          searchResults: [
            { id: 1, name: 'Pasta Recipe', cuisine: 'Italian' },
            { id: 2, name: 'Sushi Roll', cuisine: 'Japanese' }
          ],
          loading: false,
          error: null
        }
      }
    });

    store = {
      ...originalStore,
      dispatch: jest.fn(originalStore.dispatch)
    };
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search for recipes or cuisines...');
    fireEvent.change(input, { target: { value: 'pas' } });

    expect(screen.getByText('Pasta Recipe')).toBeInTheDocument();
    expect(screen.getByText('Sushi Roll')).toBeInTheDocument();
  });

  it('handles recipe selection', async () => {
    const originalStore = configureStore({
      reducer: {
        recipes: recipeReducer
      },
      preloadedState: {
        recipes: {
          searchResults: [
            { id: 1, name: 'Pasta Recipe', cuisine: 'Italian' }
          ],
          loading: false,
          error: null
        }
      }
    });

    store = {
      ...originalStore,
      dispatch: jest.fn(originalStore.dispatch)
    };
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search for recipes or cuisines...');
    fireEvent.change(input, { target: { value: 'pas' } });
    
    const recipeItem = screen.getByText('Pasta Recipe');
    fireEvent.click(recipeItem);

    expect(store.dispatch).toHaveBeenCalled();
  });
});
