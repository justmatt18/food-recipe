import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} />
      ))}
    </>
  );
};

export default Ingredients;
