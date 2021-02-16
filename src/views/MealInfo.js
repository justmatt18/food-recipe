import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mealDetails } from "../api";

const MealInfo = () => {
  const [meal, setMeal] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getMeal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMeal = async () => {
    let mealInfo = await mealDetails(id);
    setMeal(mealInfo);
    console.table(meal);
  };

  return (
    <div className="container">
      <h1>
        Meal ID: {id} {meal.strMeal}
      </h1>
    </div>
  );
};

export default MealInfo;
