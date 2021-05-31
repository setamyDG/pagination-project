import React, { useState, useEffect } from 'react';
import Layout from './components/layout';
import Pagination from './components/pagination';
import Item from './components/item';
import { StyledSection, Container, GridContainer } from './app.styled';
import { data } from './data';

const App = () => {
  const [mediaQuery, setMediaQuery] = useState({ matches: window.innerWidth > 768 });
  const [page, setPage] = useState(0);

  useEffect(() => {
    const mQuery = window.matchMedia('(min-width: 768px)');
    mQuery.addEventListener('change', setMediaQuery);
    return () => mQuery.removeEventListener(setMediaQuery);
  }, []);

  const entriesPerPage = mediaQuery.matches ? 6 : 3;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <Layout>
      <StyledSection>
        <Container>
          <GridContainer>
            {data.map(
              ({ id, name, category }, index) =>
                index >= page * entriesPerPage &&
                index < page * entriesPerPage + entriesPerPage && (
                  <Item key={index} id={id} name={name} category={category} />
                )
            )}
          </GridContainer>
          <Pagination entriesPerPage={entriesPerPage} onPageChange={handleChangePage} total={data.length} page={page} />
        </Container>
      </StyledSection>
    </Layout>
  );
};

export default App;
