import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import PublicRouter from './components/PublicRouter';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <NavBar />
          <SideBar />
          <PublicRouter />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}


export default App;
