import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "components/parts/Button";
import Text from "components/parts/Text";

const LoginStyled = styled.form`
min-width: 480px
padding: 0px 0;
margin: 0 auto;
max-width: 320px;
`;

export default class Login extends Component {
    
    state = {
        email: "",
        password: "",
        rememberMe: false
    };
    
    isValid = () => {
        const { email, password } = this.state;
        return email.length > 0 && password.length > 0;
    }
    
    handleChange = event => {
        const { id, value, type, checked } = event.target;
        const finalValue = type === 'checkbox' ? checked : value;
        this.setState({
            [id]: finalValue
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    }
    
    render() {
        const { email, password, rememberMe } = this.state;
        return (
            <LoginStyled onSubmit={this.handleSubmit}>
                <div>
                    <Button
                        type="submit"
                        value="Iniciar seción con Facebook"
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                        value="Iniciar seción con Google"
                    />
                </div>    
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
                <div>
                    <sapn>Remember me</sapn>
                    <input
                        id="rememberMe"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <Link to="/do-you-forget-your-password">do you forget your password?</Link>
                </div>
                <Button
                    disabled={!this.isValid()}
                    type="submit"
                    value="Login"
                />
            </LoginStyled>
            );
        }
    }