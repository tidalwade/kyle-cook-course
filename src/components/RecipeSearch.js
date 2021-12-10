import React from 'react'

export default function RecipeSearch({handleRecipeSearch}) {
    return (
        <div>
        <label
          htmlFor="search"
          className="recipe-search__label">
          Search
        </label>
        <input
          type="text"
          name="search"
          id="search"
        //   value={recipe.name}
          onChange={e => handleRecipeSearch(e.target.value)}
          className="recipe-search__input" />
        </div>
    )
}
