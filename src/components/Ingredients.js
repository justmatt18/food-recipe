import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="row">
      {ingredients.map((ingredient) => (
        <Ingredient ingredient={ingredient} />
      ))}
    </div>
  );
};

export default Ingredients;
