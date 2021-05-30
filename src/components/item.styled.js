import styled from 'styled-components';

const StyledItem = styled.div`
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  box-shadow: ${({ theme }) => theme.boxShadows.base};
  transition: transform 0.25s ease-in-out;
  background: ${({ theme }) => theme.colors.white};
  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const StyledParagraph = styled.p`
  margin: 25px 0px;
`;

const CircleContaienr = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.grey};
`;

export { StyledItem, StyledParagraph, CircleContaienr };
