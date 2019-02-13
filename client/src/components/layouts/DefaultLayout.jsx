import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Header from "components/parts/Header";
import NavBar from "components/parts/NavBar";
import Footer from "components/parts/Footer";

 const DefaultLayout= (props) => {
    const { component: DinamicComponent, ...rest } = props;

    return (
        <Route {...rest} render={() => (
            <Fragment>
                <Header />
                <NavBar />
                <DinamicComponent />
                <Footer />
            </Fragment>
        )} />
    )
}

export default DefaultLayout;
