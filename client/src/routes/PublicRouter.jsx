import React, { Component, Fragment } from "react";

import DefaultLayout from "components/layouts/DefaultLayout";
import Home from "pages/Home";
import WhoWeAre from "pages/WhoWeAre";
import Contact from "pages/Contact";

class PublicRouter extends Component {
  render() {
    return (
        <Fragment>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout exact path="/who-we-are" component={WhoWeAre} />
            <DefaultLayout exact path="/contact" component={Contact} />
        </Fragment>
    );
  }
}

export default PublicRouter;