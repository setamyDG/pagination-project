import styled from 'styled-components';

const GradientBg = styled.div`
  background: linear-gradient(to top, rgba(224, 216, 255, 0.75) -67.22%, rgba(237, 245, 255, 0) 99.14%);
`;

const StyledMain = styled.main`
  flex: 1 0 auto;
`;

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;

export { GradientBg, StyledContainer, StyledMain };
