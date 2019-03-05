import React, { Fragment } from "react";

import DefaultLayout from "components/layouts/DefaultLayout";
import Home from "pages/Home";
import WhoWeAre from "pages/WhoWeAre";
import Contact from "pages/Contact";
import Login from "components/parts/Login";

const PublicRouter = () => {
    return (
        <Fragment>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout exact path="/who-we-are" component={WhoWeAre} />
            <DefaultLayout exact path="/contact" component={Contact} />
            <DefaultLayout exact path="/login" component={Login} />
        </Fragment>
    );
}

export default PublicRouter;
