import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer brown darken-4 ">
      <div className="container">
        <div className="row center-align">
          <div className="col l6 s12">
            <h5 className="white-text">Matty Food Recipes</h5>
            <p className="grey-text text-lighten-4">
              You can find variety of recipes that are delicious, much more than
              tasty, really appetizing, lip-smacking: the king of food to have
              you licking your lips in anticipation
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Navigate</h5>
            <ul>
              <li>
                <Link className="border-btm white-text" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="border-btm white-text" to="/ingredients/1">
                  Ingredients
                </Link>
              </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Technologies</h5>
            <ul>
              <li>
                <Link
                  className="border-btm grey-text text-lighten-3"
                  to={{ pathname: "https://reactjs.org/" }}
                  target="_blank"
                >
                  React JS
                </Link>
              </li>
              <li>
                <Link
                  className="border-btm grey-text text-lighten-3"
                  to={{ pathname: "https://materializecss.com" }}
                  target="_blank"
                >
                  Materialize CSS
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="border-btm grey-text text-lighten-3"
                  to={{ pathname: "https://www.themealdb.com/" }}
                  target="_blank"
                >
                  Meal DB API
                </Link>
              </li>
              <li>
                <Link
                  className="border-btm grey-text text-lighten-3"
                  to={{
                    pathname: "https://www.npmjs.com/package/react-player",
                  }}
                  target="_blank"
                >
                  React-Player
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Matty Food Recipes
          <Link
            className="grey-text text-lighten-4 right"
            to={{ pathname: "https://github.com/justmatt18/food-recipe" }}
            target="_blank"
          >
            Github Repo
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
