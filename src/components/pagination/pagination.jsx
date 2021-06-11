import React from 'react';
import { number, func } from 'prop-types';
import { Wrapper, ArrowContainer, DotsContainer, Dot, StyledArrowLeft, StyledArrowRight } from './pagination.styled';

const Pagination = ({ total, page, entriesPerPage, onPageChange }) => (
  <Wrapper>
    <ArrowContainer isVisible={page !== 0} onClick={() => onPageChange(page - 1)}>
      <StyledArrowLeft />
    </ArrowContainer>
    <DotsContainer>
      {Array.from({ length: Math.ceil(total / entriesPerPage) }).map((_, index) => (
        <Dot
          key={index}
          active={index === page}
          onClick={() => {
            onPageChange(index);
          }}
        />
      ))}
    </DotsContainer>
    <ArrowContainer isVisible={page !== Math.ceil(total / entriesPerPage) - 1} onClick={() => onPageChange(page + 1)}>
      <StyledArrowRight />
    </ArrowContainer>
  </Wrapper>
);

Pagination.propTypes = {
  total: number.isRequired,
  page: number.isRequired,
  entriesPerPage: number.isRequired,
  onPageChange: func.isRequired,
};

export default Pagination;
