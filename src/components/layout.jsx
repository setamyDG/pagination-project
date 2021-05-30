import React, { useRef, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../style/GlobalStyle';
import theme from '../style/theme';
import Header from './header';
import { GradientBg, StyledMain } from './layout.styled';

const Layout = ({ children }) => {
  const headerRef = useRef();

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
  }, []);

  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header ref={headerRef} />
      <GradientBg>
        <StyledMain headerHeight={headerHeight}>{children}</StyledMain>
      </GradientBg>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
