import React from 'react'
import Recipe from './Recipe'


export default function RecipeList(props) {
  const {recipes, handleRecipeAdd, handleRecipeDelete, handleRecipeSelect} = props
  // const { handleRecipeAdd } = useContext(RecipeContext)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            // alternate way of passing props
            <Recipe 
            id={recipe.id} 
            name={recipe.name} 
            cookTime={recipe.cookTime} 
            servings={recipe.servings} 
            ingredients={recipe.ingredients} 
            handleRecipeDelete = {handleRecipeDelete}  
            handleRecipeSelect = {handleRecipeSelect} 
            />
            // <Recipe key={recipe.id} {...recipe} />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  )
}