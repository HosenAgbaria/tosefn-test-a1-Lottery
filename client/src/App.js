import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/Item/MainPage/MainPage";
import LotteryPage from "./components/LotteryPage/LotteryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/lottery-page">
              <LotteryPage></LotteryPage>
            </Route>
            <Route path="/">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
