import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe.js";

function App() {
  const APP_ID = "9eb85d00";
  const APP_KEY = "1afdb56c6a21537f90945f8f71a66fc0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
    getRecipes();
  };

  /*   useEffect(() => {
    getRecipes();
  }, []); */

  const getRecipes = async (e) => {
    e && e.preventDefault();
    console.log(`running`);
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

      // `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <>
      <div className="App">
        <form className="p-2">
          <input
            type="search"
            onChange={handleSearch}
            className="border-2 border-black"
          />

          <button className="search-button" type="submit" onClick={getRecipes}>
            Search
          </button>
        </form>
        <div className="flex justify-between m-4">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
