import styled from 'styled-components';

const GradientBg = styled.div`
  background: linear-gradient(to top, rgba(224, 216, 255, 0.75) -67.22%, rgba(237, 245, 255, 0) 99.14%);
`;

const StyledMain = styled.main`
  margin-top: ${({ headerHeight }) => headerHeight}px;
  padding: 30px;
`;

export { GradientBg, StyledMain };
