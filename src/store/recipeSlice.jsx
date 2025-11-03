import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { recipeService } from '../services/recipeService';

export const searchRecipes = createAsyncThunk(
  'recipes/search',
  async (query) => {
    const response = await recipeService.searchRecipes(query);
    return response;
  }
);

export const getRecipeById = createAsyncThunk(
  'recipes/getById',
  async (id) => {
    const response = await recipeService.getRecipeById(id);
    return response;
  }
);

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    searchResults: [],
    selectedRecipe: null,
    loading: false,
    error: null
  },
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
    clearSelectedRecipe: (state) => {
      state.selectedRecipe = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getRecipeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRecipe = action.payload;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { clearSearchResults, clearSelectedRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
