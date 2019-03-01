import React from "react";
import styled from "styled-components";

const TextStyled = styled.input`
    background: white;
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    font-weight: 300;
`;


const Text = (props) => {
    return (
        <TextStyled { ...props }/>
    );
}

export default Text;