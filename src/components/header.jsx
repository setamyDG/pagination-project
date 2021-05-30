import React from 'react';
import { StyledHeader, GradientTitle, AskMe } from './header.styled';

const Header = React.forwardRef((_, ref) => (
  <StyledHeader ref={ref}>
    <GradientTitle>REACT - PAGINATION</GradientTitle>
    <AskMe>ASK ME</AskMe>
  </StyledHeader>
));

export default Header;
