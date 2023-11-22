import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Home from "./components/home";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
