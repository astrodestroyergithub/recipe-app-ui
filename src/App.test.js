import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App.jsx';
import recipeReducer from './store/recipeSlice';

describe('App Component', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        recipes: recipeReducer
      }
    });
  });

  test('renders search bar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    const searchInput = screen.getByPlaceholderText('Search for recipes or cuisines...');
    expect(searchInput).toBeInTheDocument();
  });
});
