import React from "react";
import styled from "styled-components";
import Button from "components/parts/Button";
import Text from "components/parts/Text";
import Date from "components/parts/Date";
import Select from "components/parts/Select";

const SearchStyled = styled.form`
    
`;

const Search = () => {
    return (
        <SearchStyled>
            <Text type="text" />
            <Date type="date" />
            <Select value="Huespedes">
                <option value="1 Huesped">1 Huesped</option>
                <option value="2 Huespedes">2 Huespedes</option>
                <option value="3 Huespedes">3 Huespedes</option>
                <option value="4 Huespedes">4 Huespedes</option>
            </Select>
            <Button value="Search"/>
        </SearchStyled>
    );
}

export default Search;