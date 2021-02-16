import React from "react";
import { Link, useHistory } from "react-router-dom";

const SearchBar = ({ search, setSearch }) => {
  let history = useHistory();

  const toHome = () => {
    history.push("/");
  };
  return (
    <nav>
      <div className="nav-wrapper brown darken-2">
        <div className="row">
          <div className="col s10 m11">
            <form className="">
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  placeholder="Search for a Meal..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <label className="label-icon">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
          <div className="col s2 m1">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link onClick={toHome}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
