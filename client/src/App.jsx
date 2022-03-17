import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import Recipe from './Recipe.jsx';
import debounce from 'lodash/debounce';

const App = () => {
  let [count, setCount] = useState(2)
  let [recipes, setRecipes] = useState([]);
  let [searched, setSearched] = useState(false);
  //let [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getRecipes();
  }, [searched])

  const throttleGet = useCallback(
    debounce((searchQuery) => {
      //console.log('in debounce')
      getRecipes(searchQuery)
    }, 1000)
  )

  const getRecipes = (query) => {
    query = query || 'pancake'
    axios.get('/test', {params: {q: query}})
      .then((res) => {
        // console.log('in get .then')
        // console.log(res.data)
        setRecipes(res.data)

      })
      .catch((err) => console.error(err))
  }

  const getMealType = (query) => {
    query = query || "breakfast"
    axios.get('/test/type', {params: {q: query, mealtype: query}})
      .then((res) => {
        setRecipes(res.data)
      })
      .catch((err) => console.error(err))
  }

  //const searchRecipe = (keyword) => {
    // if (keyword.length >= 5) {
    //   let filter = recipes.filter(recipe => {
    //     if (recipe.recipe.label.toLowerCase().includes(keyword.toLowerCase())) {
    //       return recipe;
    //     }
    //   })
    //   setRecipes(filter)
    //   setSearched(true);
    // } else {
      // console.log(keyword)

      // setSearched(true);
      // setSearchQuery(keyword);
      // throttleGet(searchQuery);
      // console.log('Need more than 3 characters')
    //}
  //}
  //setTimeout(searchRecipe, 5000)

  return (
    <div>
      <Search onSearch={throttleGet}/>
      <div className="nav">
      <div onClick={() => getMealType('breakfast')}>Breakfast</div>
      <div onClick={() => getMealType('lunch')}>Lunch</div>
      <div onClick={() => getMealType('dinner')}>Dinner</div>
      </div>
      <div className="recipeList">
        {recipes.map((recipe, index) => {
          return <Recipe recipe={recipe} key={index} />
        })}
      </div>
    </div>
  )
}

export default App;