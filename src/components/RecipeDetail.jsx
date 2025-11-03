import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from '../store/recipeSlice';
import '../styles/RecipeDetail.scss';

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedRecipe, loading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!selectedRecipe) {
    return <div className="not-found">Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <h1>{selectedRecipe.name}</h1>
        <p className="cuisine">Cuisine: {selectedRecipe.cuisine}</p>
      </div>
      <div className="recipe-image">
        <img src={selectedRecipe.image} alt={selectedRecipe.name} />
      </div>
      <div className="recipe-info">
        <div className="info-item">
          <span>Preparation Time:</span> {selectedRecipe.prepTimeMinutes} minutes
        </div>
        <div className="info-item">
          <span>Cooking Time:</span> {selectedRecipe.cookTimeMinutes} minutes
        </div>
        <div className="info-item">
          <span>Servings:</span> {selectedRecipe.servings}
        </div>
        <div className="info-item">
          <span>Difficulty:</span> {selectedRecipe.difficulty}
        </div>
        <div className="info-item">
          <span>Calories:</span> {selectedRecipe.caloriesPerServing} per serving
        </div>
      </div>
      <div className="recipe-content">
        <section className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
        <section className="instructions">
          <h2>Instructions</h2>
          <ol>
            {selectedRecipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </section>
      </div>
      <div className="recipe-tags">
        <h3>Tags</h3>
        <div className="tags-container">
          {selectedRecipe.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="recipe-rating">
        <span className="rating">Rating: {selectedRecipe.rating}/5</span>
        <span className="review-count">({selectedRecipe.reviewCount} reviews)</span>
      </div>
    </div>
  );
};

export default RecipeDetail;
