import React, { Fragment } from "react";

import DefaultLayout from "components/layouts/DefaultLayout";
import Home from "pages/Home";
import WhoWeAre from "pages/WhoWeAre";
import Contact from "pages/Contact";
import Login from "pages/Login";
import Registration from "pages/Registration";

const PublicRouter = () => {
    return (
        <Fragment>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout exact path="/who-we-are" component={WhoWeAre} />
            <DefaultLayout exact path="/contact" component={Contact} />
            <DefaultLayout exact path="/login" component={Login} />
            <DefaultLayout exact path="/registration" component={Registration} />
        </Fragment>
    );
}

export default PublicRouter;
