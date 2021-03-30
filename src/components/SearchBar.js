import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const toSearchPage = () => {
    history.push(`/search/q=${search}`);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper brown darken-2">
          <div className="container">
            <Link to="/" className="brand-logo">
              <span>Food Recipes</span>
            </Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <form onSubmit={toSearchPage}>
                  <input
                    className="input-field"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for a Meal..."
                  />
                </form>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ingredients/1">Ingredients</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <form onSubmit={toSearchPage}>
            <input
              className="mobile-input input-field"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for a Meal..."
              style={{ paddingLeft: 25 }}
            />
          </form>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ingredients/1">Ingredients</Link>
        </li>
      </ul>
    </>
  );
};

export default SearchBar;
