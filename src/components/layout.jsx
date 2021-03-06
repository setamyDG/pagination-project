import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../style/GlobalStyle';
import theme from '../style/theme';
import Header from './header';
import Footer from './footer';
import { StyledContainer, StyledMain, GradientBg } from './layout.styled';

const Layout = ({ children }) => (
  <ThemeProvider ThemeProvider theme={theme}>
    <GlobalStyle />
    <GradientBg>
      <Header />
      <StyledContainer>
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledContainer>
    </GradientBg>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
