import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../style/GlobalStyle';
import theme from '../style/theme';
import Title from './title';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMain = styled.main``;

const Layout = ({ children }) => (
  <ThemeProvider ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledHeader>
      <Title />
    </StyledHeader>
    <StyledMain>{children}</StyledMain>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
