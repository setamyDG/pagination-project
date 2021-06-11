import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../assets/right-arrow.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ArrowContainer = styled.span`
  padding: 0px 10px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  :hover {
    cursor: pointer;
  }
`;

const DotsContainer = styled.div`
  margin: 0 40px;
  display: flex;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: ${({ active }) => (active ? '#383F54' : '#E5E6F0')};
  border-radius: 50%;
  margin: 0 7px;
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.grey};
  }
`;

const StyledArrowLeft = styled(ArrowLeft)`
  :hover {
    > path {
      stroke: ${({ theme }) => theme.colors.grey};
    }
  }
  > path {
    stroke: black;
  }
`;

const StyledArrowRight = styled(ArrowRight)`
  :hover {
    > path {
      stroke: ${({ theme }) => theme.colors.grey};
    }
  }
  > path {
    stroke: black;
  }
`;

export { Wrapper, ArrowContainer, DotsContainer, Dot, StyledArrowLeft, StyledArrowRight };
