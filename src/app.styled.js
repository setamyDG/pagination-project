import styled from 'styled-components';
import { media } from './utils';

const StyledSection = styled.section`
  padding: 40px 0px;
`;

const Container = styled.div`
  margin: 0px 40px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 44px;

  ${media.tablet`
    grid-template-columns: repeat(1, minmax(0, 1fr));
  `}
`;

export { GridContainer, Container, StyledSection };
