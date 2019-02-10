import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PublicRouter from 'routes/PublicRouter';

const App = () => {
    return (
        <Router>
            <PublicRouter />
        </Router>
    );
}


export default App;
