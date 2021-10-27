import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/molecules/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/:id" component={DetailMovie} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
