import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import RecipeDetail from '../components/RecipeDetail.jsx';
import recipeReducer from '../store/recipeSlice';

// Mock getRecipeById to return mocked data
jest.mock('../services/recipeService', () => ({
  recipeService: {
    getRecipeById: jest.fn()
  }
}));

// Mock recipe data

// Mock recipe data
const mockRecipe = {
  id: 1,
  name: 'Test Recipe',
  cuisine: 'Test Cuisine',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  instructions: ['Step 1', 'Step 2'],
  prepTimeMinutes: 15,
  cookTimeMinutes: 30,
  servings: 4,
  difficulty: 'Medium',
  image: 'test-image.jpg',
  tags: ['Tag1', 'Tag2'],
  rating: 4.5,
  reviewCount: 10
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' })
}));

describe('RecipeDetail Component', () => {
  let store;

  beforeEach(() => {
    const originalStore = configureStore({
      reducer: {
        recipes: recipeReducer
      },
      preloadedState: {
        recipes: {
          selectedRecipe: null,
          loading: false,
          error: null
        }
      }
    });

    store = {
      ...originalStore,
      dispatch: jest.fn(originalStore.dispatch)
    };

    // Clear all mocks at the start of each test
    jest.clearAllMocks();
  });  it('renders loading state', async () => {
    // Mock getRecipeById to never resolve, keeping the loading state
    const { recipeService } = require('../services/recipeService');
    const mockPromise = new Promise(() => {});
    recipeService.getRecipeById.mockReturnValue(mockPromise);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RecipeDetail />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', async () => {
    // Mock getRecipeById to reject, triggering the error state
    const { recipeService } = require('../services/recipeService');
    recipeService.getRecipeById.mockRejectedValue(new Error('Failed to load recipe'));

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RecipeDetail />
        </MemoryRouter>
      </Provider>
    );

    // Wait for the error state to appear
    await screen.findByText(/Error: Failed to load recipe/, undefined, {
      timeout: 2000
    });
  });

    it('renders recipe details', async () => {
    // Mock getRecipeById to return the mock recipe
    const { recipeService } = require('../services/recipeService');
    recipeService.getRecipeById.mockResolvedValue(mockRecipe);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RecipeDetail />
        </MemoryRouter>
      </Provider>
    );

    // Wait for the recipe details to be rendered
    const nameElement = await screen.findByText(mockRecipe.name);
    const cuisineElement = await screen.findByText(`Cuisine: ${mockRecipe.cuisine}`);
    
    expect(nameElement).toBeInTheDocument();
    expect(cuisineElement).toBeInTheDocument();
  });

  it('dispatches getRecipeById on mount', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <RecipeDetail />
          </MemoryRouter>
        </Provider>
      );
    });

    expect(store.dispatch).toHaveBeenCalled();
  });
});
