import React, { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper brown">
          <form>
            <div className="input-field">
              <input id="search" type="search" />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default App;
