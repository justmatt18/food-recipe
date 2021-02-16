import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";

// Format
const Home = lazy(() => import("../views/Home"));
const MealInfo = lazy(() => import("../views/MealInfo"));
const About = lazy(() => import("../views/About"));

const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <Suspense fallback={"Fallback"}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meal/:id" component={MealInfo} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
