import React from 'react'
import Ingredient from './Ingredient'
// import RecipeList from './RecipeList'

export default function IngredientList({ ingredients}) {
  //Different approach to mapping through arrary than the RecipeList. But does same thing
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  })
  return (
    <div className="ingredient-grid">
      {ingredientElements}
    </div>
  )
}