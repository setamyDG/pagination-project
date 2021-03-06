import React from 'react';
import styled from 'styled-components';
import { media } from '../utils';

const GradientTitle = styled.h1`
  font-size: 10rem;
  font-weight: 900;
  background: linear-gradient(to bottom, #4c2898aa 10%, #4115a000 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;

  ${media.desktop`
    font-size: 4rem;
    margin-top: 20px;

  `}
`;

const Title = () => <GradientTitle>PAGINATION</GradientTitle>;

export default Title;
