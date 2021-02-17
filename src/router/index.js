import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";

// Format
const Home = lazy(() => import("../views/Home"));
const MealInfo = lazy(() => import("../views/MealInfo"));
const Search = lazy(() => import("../views/Search"));
const About = lazy(() => import("../views/About"));
const SearchBar = lazy(() => import("../components/SearchBar"));

const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <Suspense fallback={"Fallback"}>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meal/:id" component={MealInfo} />
          <Route path="/search/q=:param" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
