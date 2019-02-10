import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import NavBar from "components/parts/NavBar";
import Footer from "components/parts/Footer";

export default class DefaultLayout extends Component {
    render() {
        const { component: DinamicComponent, ...rest } = this.props;

        return (
            <Route {...rest} render={() => (
                <Fragment>
                    <NavBar />
                    <DinamicComponent />
                    <Footer />
                </Fragment>
            )} />
        )
    }
}
