import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";

class PublicRouter extends Component {
  render() {
    return (
        <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/who-we-are" component={WhoWeAre} />
            <Route exact path="/contact" component={Contact} />
        </Fragment>
    );
  }
}

export default PublicRouter;