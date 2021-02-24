import React, { useEffect } from "react";
import M from "materialize-css";

const Ingredient = ({ ingredient }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="col s12 m4 l2">
      <img
        className="materialboxed responsive-img"
        src={ingredient.img}
        alt={ingredient.name}
      />
      <p>
        <span>{ingredient.measure}</span>
      </p>
      <p>
        <span>{ingredient.name}</span>
      </p>
    </div>
  );
};

export default Ingredient;
