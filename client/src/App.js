import React, { Component, Fragment } from 'react';
import Info from './components/Info';

class App extends Component {
  render() {
    const data = [
      { nombre: "Pepe", edad: 20 },
      { nombre: "Ener", edad: 51 },
      { nombre: "Leito", edad: 18 },
    ];

    const infos = data.map(persona => (
      <Info name={persona.nombre} age={persona.edad} />
    ));

    return (
      <Fragment>
        {infos}
      </Fragment>
    );
  }
}

export default App;
