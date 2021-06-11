import React from 'react';
import { number, string } from 'prop-types';
import { StyledItem, StyledParagraph, CircleContaienr } from './item.styled';

const Item = ({ id, name, category }) => (
  <StyledItem>
    <CircleContaienr>
      <p>{id}</p>
    </CircleContaienr>
    <StyledParagraph>Name: {name}</StyledParagraph>
    <StyledParagraph>Category: {category}</StyledParagraph>
  </StyledItem>
);

Item.propTypes = {
  id: number,
  name: string,
  category: string,
};

export default Item;
