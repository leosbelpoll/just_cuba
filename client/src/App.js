import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

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
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <SideBar />
            </Col>
            <Col xs="auto">
              <PublicRouter />
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Fragment>
      </Router>
    );
  }
}


export default App;
