import React, { useState, useEffect } from "react";
import Meals from "../components/Meals";
import Preloader from "../components/Preloader";
import { getMeals } from "../api";
import PopularIngredients from "../components/PopularIngredients";
import { latestMeals as latestFood } from "../api";
import { isEmpty } from "../utils";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [latestMeals] = useState(latestFood);

  useEffect(() => {
    results();
  }, []);

  const results = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  return (
    <div>
      <div className="latestmeals-section center-align">
        <h4 className="brown-text text-darken-4">
          <span>Latest Meals</span>
        </h4>
        <div className="container">
          <Meals meals={latestMeals} />
        </div>
      </div>
      <PopularIngredients />
      {isEmpty(meals) ? (
        <Preloader />
      ) : (
        <>
          <h4 className="brown-text text-darken-4 center-align">
            <span>Random Meals</span>
          </h4>
          <div className="container">
            <Meals meals={meals} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
