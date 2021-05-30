import styled from 'styled-components';
import { media, zIndex } from '../utils';

const StyledHeader = styled.header`
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  top: 0;
  left: 0;
  right: 0;
  padding: 25px 75px;
  z-index: ${zIndex.level2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadows.header};
`;

const GradientTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  background: ${({ theme }) => theme.colors.gradientText};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;

  ${media.desktop`
    font-size: 4rem;
    margin-top: 20px;

  `}
`;

const AskMe = styled.button`
  padding: 15px 45px;
  border-radius: 5px;
  border: 1px solid lightgray;
  background: ${({ theme }) => theme.colors.white};
  transition: box-shadow, color 0.35s ease-in-out;
  color: ${({ theme }) => theme.colors.grey};
  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadows.hover};
    color: black;
  }
`;

export { GradientTitle, StyledHeader, AskMe };
