import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PublicRouter from 'routes/PublicRouter';

class App extends Component {
  render() {
    return (
      <Router>
          <PublicRouter />
      </Router>
    );
  }
}


export default App;
