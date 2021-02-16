import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer brown darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Matty Food Recipes</h5>
            <p className="grey-text text-lighten-4">
              A food recipe where you can find different meals globally.
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Navigate</h5>
            <ul>
              <li>
                <Link className="white-text" to="/">
                  Home
                </Link>
              </li>
              <li>Categories</li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Technologies</h5>
            <ul>
              <li>React JS</li>
              <li>Materialize CSS</li>
              <li>TheMealDB API</li>
              <li>
                <Link className="grey-text text-lighten-3" to="/">
                  Link 4
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
