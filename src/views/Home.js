import React, { useState, useEffect } from "react";
import Meals from "../components/Meals";
import Preloader from "../components/Preloader";
import { getMeals } from "../api";
import PopularIngredients from "../components/PopularIngredients";
import { latestMeals as latestFood } from "../api";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [latestMeals] = useState(latestFood);

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
      <div className="latestmeals-section center-align">
        <h4 className="brown-text text-darken-4">
          <span>Latest Meals</span>
        </h4>
        <Meals meals={latestMeals} />
      </div>
      <PopularIngredients />
      {meals.length !== 8 ? (
        <Preloader />
      ) : (
        <>
          <h4 className="brown-text text-darken-4 center-align">
            <span>Random Meals</span>
          </h4>
          <Meals meals={meals} />
        </>
      )}
    </div>
  );
};

export default Home;
