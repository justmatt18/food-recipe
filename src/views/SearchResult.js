import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMealByName } from "../api";
import Meals from "../components/Meals";

const SearchResult = () => {
  const [meals, setMeals] = useState([]);
  const [isEmpty, setIsEmpty] = useState([true]);
  let { param } = useParams();

  useEffect(() => {
    searchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchResult = async () => {
    const data = await searchMealByName(param);
    if (data) {
      setIsEmpty(false);
      return setMeals(data);
    }
  };

  return (
    <div>
      <div className="container">
        {meals && !isEmpty > 0 ? (
          <p className="brown-text text-darken-2">
            <span>{`${meals.length} meals found for "${param}"`}</span>
          </p>
        ) : (
          <div className="margin-tb mb-3">
            <span>{`No meals found for "${param}"`}</span>
          </div>
        )}
      </div>
      <div className="row container">
        <Meals meals={meals} />
      </div>
    </div>
  );
};

export default SearchResult;
