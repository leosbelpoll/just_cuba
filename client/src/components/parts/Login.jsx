import React, { Component } from "react";
import styled from "styled-components";


import Button from "components/parts/Button";
import Text from "components/parts/Text";

const LoginStyled = styled.form`
    min-width: 480px
    padding: 60px 0;
	margin: 0 auto;
	max-width: 320px;
`;

export default class Login extends Component {

    state = {
      email: "",
      password: ""
    };

  isValid = () => {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <LoginStyled onSubmit={this.handleSubmit}>
          <div>
            <span>Email</span>
            <Text 
                id="email"
                type="email"
                value={email}
                onChange={this.handleChange}
            />
          </div>
          <div>
            <span>Password</span>
            <Text 
                id="password"
                value={password}
                onChange={this.handleChange}
                type="password"
            />
          </div>
          <Button
                disabled={!this.isValid()}
                type="submit"
                value="Login"
        />
        </LoginStyled>
      </div>
    );
  }
}