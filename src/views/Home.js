import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Meals from "../components/Meals";
import Preloader from "../components/Preloader";

const Home = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

  useEffect(() => {
    getMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fetch 8 random meals from API
  const getMeals = async () => {
    let temp_meals = [];
    while (temp_meals.length !== 8) {
      let res = await fetch(randomMeal);
      let data = await res.json();
      let isDup = !!temp_meals.find(
        (meal) => JSON.stringify(meal) === JSON.stringify(data.meals[0])
      );
      if (!isDup) {
        temp_meals.push(data.meals[0]);
      }
    }
    setMeals(temp_meals);
  };

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      {meals.length !== 8 ? <Preloader /> : <Meals meals={meals} />}
    </div>
  );
};

export default Home;
