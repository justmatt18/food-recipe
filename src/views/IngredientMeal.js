import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IngredientMeal = () => {
  let { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">Ingredient</div>
        <p>Ing Image</p>
        <p>Ing Name -</p>
      </div>
      <div className="row">
        <p className="center-align">
          <span>Meals</span>
        </p>
        <div className="col s12 m4 l3">Card Card Meal</div>
      </div>
    </div>
  );
};

export default IngredientMeal;
