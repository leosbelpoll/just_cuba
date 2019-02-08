import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <NavBar />
        <SideBar />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Section />
);

export default App;
