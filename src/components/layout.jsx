import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../style/GlobalStyle';
import theme from '../style/theme';

const Layout = ({ children }) => (
  <ThemeProvider ThemeProvider theme={theme}>
    <GlobalStyle />
    <main> {children}</main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
