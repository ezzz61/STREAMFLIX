import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DetailMovie from "./pages/DetailMovie";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/molecules/Navbar/Navbar";
import { userAction } from "./store/userSlice";

function App() {
  const wallet = useSelector((state) => state.user.wallet);
  const ownedMovies = useSelector((state) => state.user.ownedMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    const ownedMovies = localStorage.getItem("ownedMovies");
    if (wallet) {
      dispatch(userAction.wallet(wallet));
    }
    if (ownedMovies) {
      dispatch(userAction.ownedMovies(JSON.parse(ownedMovies)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("wallet", wallet);
    localStorage.setItem("ownedMovies", JSON.stringify(ownedMovies));
  }, [wallet, ownedMovies]);
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
