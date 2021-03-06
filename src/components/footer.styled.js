import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 150px;
  background: linear-gradient(180deg, #9d95f0 0%, #5d53cc 100%);
  border-radius: 80px 0px 0px 0px;
  flex-shrink: 0;
`;

const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-family: 'Work Sans', sans-serif;
  letter-spacing: 6px;
  text-align: center;
  text-transform: uppercase;
`;

export { StyledFooter, StyledParagraph };
