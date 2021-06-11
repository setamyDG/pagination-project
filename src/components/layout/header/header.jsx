import React from 'react';
import { StyledHeader, GradientTitle, Button } from './header.styled';

const Header = React.forwardRef((_, ref) => (
  <StyledHeader ref={ref}>
    <GradientTitle>PAGINATION</GradientTitle>
    <div>
      <a href="mailto:hello@codetain.com?subject=Pagination-Daniel-Gola-Blog-Post">
        <Button>ASK ME</Button>
      </a>
      <a href="https://github.com/setamyDG/pagination-project" rel="noopener noreferrer" target="_blank">
        <Button marginLeft>SEE CODE</Button>
      </a>
    </div>
  </StyledHeader>
));

export default Header;
