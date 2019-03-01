import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
    background: white;
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    font-weight: 300;

    :hover {
        background: rgba(0, 0, 0, 0.05);
    }
`;

const Button = (props) => {
    const { value, ...attribs } = props;
    return (
        <ButtonStyled {...attribs}>
            {value || 'Button'}
        </ButtonStyled>
    );
}

export default Button;
