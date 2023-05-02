import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe.js";

function App() {
  const APP_ID = "9eb85d00";
  const APP_KEY = "1afdb56c6a21537f90945f8f71a66fc0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("mango");

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  return (
    <>
      <div className="App py-2">
        <form onSubmit={getSearch} className="flex justify-center">
          <input
            type="search"
            onChange={updateSearch}
            value={search}
            className="border-2 border-black placeholder:text-center placeholder:italic"
            placeholder="Enter dish name"
          />

          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes flex">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
