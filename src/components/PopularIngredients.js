import React, { useState, useEffect } from "react";
import M from "materialize-css";

const PopularIngredients = () => {
  const [imgs] = useState([
    {
      ingredient: "Beef",
      img: " https://www.themealdb.com/images/ingredients/Beef.png",
    },
    {
      ingredient: "Pork",
      img: " https://www.themealdb.com/images/ingredients/Pork.png",
    },
    {
      ingredient: "Chicken",
      img: " https://www.themealdb.com/images/ingredients/Chicken.png",
    },
    {
      ingredient: "Salmon",
      img: " https://www.themealdb.com/images/ingredients/Salmon.png",
    },
  ]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="margin-top yellow darken-4 ingredients-section center-align">
      <h4 className="brown-text text-darken-4">
        <span>Popular Ingredients</span>
      </h4>
      <div className="row container">
        {imgs.map((img, index) => (
          <div key={index} className="col s12 m5 l3">
            <img
              className="materialboxed responsive-img"
              src={img.img}
              alt={img.ingredient}
            />
            <p className="center-align">
              <span>{img.ingredient}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularIngredients;
