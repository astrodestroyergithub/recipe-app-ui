import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { searchRecipes, clearSearchResults } from '../store/recipeSlice';
import '../styles/SearchBar.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchResults, loading } = useSelector((state) => state.recipes);

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.length >= 3) {
        dispatch(searchRecipes(query));
      } else {
        dispatch(clearSearchResults());
      }
    }, 300),
    [dispatch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleRecipeSelect = (id) => {
    setSearchTerm('');
    dispatch(clearSearchResults());
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for recipes or cuisines..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {loading && <div className="loading-spinner">Loading...</div>}
      {searchResults.length > 0 && searchTerm.length >= 3 && (
        <ul className="search-results">
          {searchResults.map((recipe) => (
            <li
              key={recipe.id}
              onClick={() => handleRecipeSelect(recipe.id)}
              className="search-result-item"
            >
              <span className="recipe-id">{recipe.id}</span>
              <span className="recipe-name">{recipe.name}</span>
              <span className="recipe-cuisine">{recipe.cuisine}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
