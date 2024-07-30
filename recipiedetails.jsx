import React from 'react';

const RecipeDetails = ({ recipe, onBack }) => {
  const getIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
      <h3>Ingredients</h3>
      <ul>
        {getIngredients(recipe).map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
  <h3>Preparation Method</h3>
      <p>{recipe.strInstructions}</p>
      <button onClick={onBack} className="back-button">Back to search results</button>
    </div>
  );
};

export default RecipeDetails;