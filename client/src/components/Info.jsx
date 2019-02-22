import React, { Component, Fragment } from 'react';

class Info extends Component {
  state = {
    errors: null,
  }

  componentDidMount(){
    console.log("me monte");
  }

  render() {
    return (
      <div style={{background: 'grey', margin: '20px', color: 'white', padding: '20px'}}>
        <p><strong>Nombre:</strong> {this.props.name}</p>
        <p><strong>Edad:</strong> {this.props.age}</p>
      </div>
    );
  }
}

export default Info;
