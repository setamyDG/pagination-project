import React from 'react';
import styled from 'styled-components';
import Title from './title';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
`;

const Header = () => (
  <StyledHeader>
    <Title />
  </StyledHeader>
);

export default Header;
