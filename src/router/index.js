import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Format
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));

const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <Suspense fallback={"Fallback"}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
