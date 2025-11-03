import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const recipeService = {
  async searchRecipes(query, limit = 5) {
    try {
      const response = await axios.get(`${API_BASE_URL}/recipes/search`, {
        params: {
          query,
          limit
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching recipes:', error);
      throw error;
    }
  },

  async getRecipeById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/recipes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }
};
