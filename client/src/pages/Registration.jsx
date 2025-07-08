import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "components/parts/Button";
import Text from "components/parts/Text";
import Select from "components/parts/Select";

const RegisterStyled = styled.form`
min-width: 480px
padding: 0px 0;
margin: 0 auto;
max-width: 320px;
`;

export default class Register extends Component {
    
    state = {
        registerWithMail: false,
        email: "",
        nombre: "",
        apellido: "",
        password: "",
        getPromos: false
    };
    
    isValid = () => {
        const { email, password, nombre, apellido } = this.state;
        return email.length > 0 && 
            password.length > 0 && 
            nombre.length > 0 && 
            apellido.length > 0;
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
    
    renderWithOutMail = () => {
        return (
            <div>
                <Button
                    block 
                    type="submit"
                    value="Continuar con Facebook"
                />
                <Button
                    block
                    type="submit"
                    value="Continuar con Google"
                />
                <Button
                    onClick={ () => this.setState({ registerWithMail: true }) }
                    block
                    type="submit"
                    value="Registrarce con un correo electrónico"
                />
                ¿Ya tienes cuenta en Just_Cuba? <Link to="/login">Inicia sesión</Link>
            </div>  
        );
    } 

    renderWithMail = () => {
        const { email, password, nombre, apellido, getPromos } = this.state;
        return (
            <Fragment>
                <div>
                Regístrate con 
                <Link 
                    onClick={ () => this.setState({ registerWithMail: false }) }
                    to="/registration"> Facebook 
                </Link> 
                 o 
                <Link 
                    onClick={ () => this.setState({ registerWithMail: false }) } 
                    to="/registration"> Google
                </Link>
                </div>
                <br />
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
                    <span>Nombre</span>
                    <Text 
                        id="nombre"
                        type="nombre"
                        value={nombre}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <span>Apellido</span>
                    <Text 
                        id="apellido"
                        type="apellido"
                        value={apellido}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <span>Crea una contraceña</span>
                    <Text 
                        id="password"
                        value={password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </div>
                <div>
                    <sapn>Fecha de nacimiento:</sapn>
                    <div>
                        <Select value = "Mes">
                            <option value = "Enero">Enero</option>
                            <option value = "Febrero">Febrero</option>
                            <option value = "etc...">etc...</option>
                        </Select>
                        <Select value = "Día">
                            <option value = "01">01</option>
                            <option value = "02">02</option>
                            <option value = "etc...">etc...</option>
                        </Select>
                        <Select value = "Año">
                            <option value = "2019">2019</option>
                            <option value = "2018">2018</option>
                            <option value = "etc...">etc...</option>
                        </Select>
                    </div>
                </div>
                <div>
                    <input
                        id="getPromos"
                        type="checkbox"
                        checked={getPromos}
                        onChange={this.handleChange}
                    />
                    <span>No quiero recibir mensajes promocionales de Just Cuba. También puedo optar por desactivarlos en todo momento desde la configuración de mi cuenta o a través del enlace del mensaje.</span>
                </div>
                <div>
                    ¿Ya tienes cuenta en Just_Cuba? <Link to="/login">Inicia sesión</Link>
                </div>  
                <Button
                    disabled={!this.isValid()}
                    type="submit"
                    value="Register"
                />
            </Fragment>
        );
    }
    
    render() {
        const { registerWithMail } = this.state;

        return (
            <RegisterStyled onSubmit={this.handleSubmit}>
                {registerWithMail ?  this.renderWithMail() : this.renderWithOutMail() }
            </RegisterStyled>
            );
        }
    }