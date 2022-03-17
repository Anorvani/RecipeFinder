import React, {useState, useEffect} from 'react';

var Recipe = ({recipe}) => {

  const showMore = () => {
    let v = document.getElementById("moreInfo")
      if(v.style.display ==="none") {
        v.style.display = 'block'
      } else {
        v.style.display = "none"
      }
  }
  return (
    <div className="list" onClick={() => {showMore()}}>
      <h3 className="recipe-name">{recipe.recipe.label}</h3>
      <img alt="pic of food" src={recipe.recipe.images.THUMBNAIL.url}></img>
      <div id="moreInfo">
      <p className="info">Serving Size: {recipe.recipe.yield}</p>
      {recipe.recipe.totalTime !== 0 ? <p className="info">Total Time: {recipe.recipe.totalTime}</p> : <div></div>}
      <h3 className="ingredients">Ingredients</h3>
      <ul>
        {recipe.recipe.ingredientLines.map((ingredient) => {
          return <li className="info" >{ingredient}</li>})}
      </ul>
      <a target="_blank" href={recipe.recipe.url} className="directions">Cooking Directions</a>
      </div>
    </div>
  )
}



export default Recipe;


