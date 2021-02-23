import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIngredientImg, mealDetails } from "../api";
import Ingredients from "../components/Ingredients";
import Preloader from "../components/Preloader";
import ReactPlayer from "react-player";

const MealInfo = () => {
  const [meal, setMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getMeal();
    getIngredients();
    // getIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMeal = async () => {
    let mealInfo = await mealDetails(id);
    setMeal(mealInfo);
    console.table(meal);
  };

  const getIngredients = async () => {
    let temp = [];
    for (let i = 1; i <= 20; i++) {
      let ingredientName = await meal[`strIngredient${i}`];
      if (ingredientName) {
        let measure = await meal[`strMeasure${i}`];
        let img = getIngredientImg(ingredientName);
        const item = { name: ingredientName, measure: measure, img: img };
        temp.push(item);
      }
    }
    setIngredients(temp);
  };

  return (
    <div className="container brown-text text-darken-2">
      <div className="margin-tb row center-align mb-3 meal-info">
        {meal.length !== 0 ? (
          <div className="col s12 m4">
            <h4>
              <span>{meal.strMeal}</span>
            </h4>
            <img
              className="materialboxed responsive-img"
              src={meal.strMealThumb}
              alt={`${meal.strMeal} meal`}
            />
          </div>
        ) : (
          <Preloader />
        )}
        <div className="col s12 m8 center-align">
          <h4>
            <span>Ingredients</span>
          </h4>
          {ingredients.length !== 0 ? (
            <Ingredients ingredients={ingredients} />
          ) : (
            <Preloader />
          )}
        </div>
      </div>
      <div className="row left-align">
        <div className="col s12">
          <h4>
            <span>Instructions</span>
          </h4>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
      <div className="row left-align">
        <div className="col s12">
          <h4>
            <span>Demo</span>
          </h4>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={meal.strYoutube}
              width="100%"
              height="100%"
              pip="true"
              stopOnUnmount={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
