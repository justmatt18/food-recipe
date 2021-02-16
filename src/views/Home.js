import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Meals from "../components/Meals";
import Preloader from "../components/Preloader";
import { getMeals } from "../api";
import PopularIngredients from "../components/PopularIngredients";

const Home = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);

  useEffect(() => {
    const results = async () => {
      const data = await getMeals();
      setMeals(data);
    };
    results();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      {meals.length !== 8 ? <Preloader /> : <Meals meals={meals} />}
      <PopularIngredients />
    </div>
  );
};

export default Home;
