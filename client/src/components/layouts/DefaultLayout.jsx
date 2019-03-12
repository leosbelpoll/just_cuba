import React, { Fragment } from "react";
import { Route } from "react-router-dom";

<<<<<<< Updated upstream
import Header from "components/parts/Header";
=======
>>>>>>> Stashed changes
import Footer from "components/parts/Footer";
import Header from "components/parts/Header";


 const DefaultLayout= (props) => {
    const { component: DinamicComponent, ...rest } = props;

    return (
        <Route {...rest} render={() => (
            <Fragment>
                <Header />
                <DinamicComponent />
                <Footer />
            </Fragment>
        )} />
    )
}

export default DefaultLayout;
