import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMealByName } from "../api";
import Meals from "../components/Meals";
import Preloader from "../components/Preloader";

const SearchResult = () => {
  const [meals, setMeals] = useState([]);
  let { param } = useParams();

  useEffect(() => {
    searchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchResult = async () => {
    const data = await searchMealByName(param);
    return setMeals(data);
  };

  return (
    <div>
      <div className="container">
        {meals.length > 0 ? (
          <p className="brown-text text-darken-2">
            <span>{`${meals.length} meals found for "${param}"`}</span>
          </p>
        ) : (
          <Preloader />
        )}
      </div>
      <div className="row">
        <Meals meals={meals} />
      </div>
    </div>
  );
};

export default SearchResult;
