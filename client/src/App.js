import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

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

export default App;
