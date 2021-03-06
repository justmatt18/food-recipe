import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  listOfIngredients,
  getIngredientImg,
  filterByMainIngredient,
} from "../api";
import Meals from "../components/Meals";
import Preloader from "../components/Preloader";
import { isEmpty } from "../utils";

const IngredientMeal = () => {
  const [meals, setMeals] = useState([]);
  const [ingredient, setIngredient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ingredient]);

  const getIngredients = async () => {
    let data = await listOfIngredients();
    setIngredient(data[id - 1]);
    fetchMealsByIngredient();
  };

  const fetchMealsByIngredient = async () => {
    const data = await filterByMainIngredient(ingredient.strIngredient);
    return setMeals(data);
  };

  return (
    <div className="container brown-text text-darken-2 mb-3">
      <div className="margin-tb row  mb-3 meal-info">
        {!isEmpty(ingredient) ? (
          <div>
            <div className="col s12 m4 mb-3">
              <h4 className="center-align">
                <span>{ingredient.strIngredient}</span>
              </h4>
              <img
                className="materialboxed responsive-img"
                src={getIngredientImg(ingredient.strIngredient)}
                alt={`${ingredient.strIngredient} meal`}
              />

              <ul className="pagination center-align">
                <li className={id === "1" ? "disabled" : "waves-effect"}>
                  <Link to={`/ingredients/${1 * id - 1}`}>
                    <i className="material-icons">chevron_left</i>
                  </Link>
                </li>
                <li className="waves-effect">
                  <Link to={`/ingredients/${1 * id + 1}`}>
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col s12 m7 push-m2 mb-3">
              <h4 className="center-align mb-3">
                <span>Description</span>
              </h4>
              <p>
                <span>{ingredient.strDescription}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="center-align">
            <Preloader />
          </div>
        )}
      </div>
      <div className="row">
        <div className="col s12">
          <h4 className="center-align">
            <span>Meals</span>
          </h4>
          <div className="center-align">
            {!isEmpty(meals) ? <Meals meals={meals} /> : <Preloader />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientMeal;
