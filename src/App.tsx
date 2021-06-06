import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landing/LandingPage";
import GameConfigPage from "./components/pages/game-config/GameConfigPage";
import GamePage from "./components/pages/game/GamePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game-config">
          <GameConfigPage />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
