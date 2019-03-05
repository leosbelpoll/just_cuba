import React from "react";
import styled from "styled-components";
import Button from "components/parts/Button";
import Text from "components/parts/Text";
import Date from "components/parts/Date";
import Select from "components/parts/Select";

const SearchStyled = styled.footer`
    
`;

const Search = () => {
    return (
        <SearchStyled>
            <Text type="text" />
            <Date type="date" />
            <Select />
            <Button value="Search"/>
        </SearchStyled>
    );
}

export default Search;