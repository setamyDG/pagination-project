import React, { useState, useEffect } from 'react';
import Layout from './components/layout';
import styled from 'styled-components';
import { media } from './utils';
import Pagination from './components/pagination';
import Item from './components/item';

const StyledSection = styled.section`
  padding-top: 30px;
  height: 100vh;
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

const GradientBg = styled.div`
  background: linear-gradient(to top, rgba(224, 216, 255, 0.75) -67.22%, rgba(237, 245, 255, 0) 99.14%);
`;

const Wrapper = styled.div`
  ${media.tablet`
    margin-top: 50px;
  `}
`;

const App = () => {
  const [mediaQuery, setMediaQuery] = useState({ matches: window.innerWidth > 768 });
  const [page, setPage] = useState(0);

  useEffect(() => {
    const mQuery = window.matchMedia('(min-width: 768px)');
    mQuery.addEventListener('change', setMediaQuery);
    return () => mQuery.removeEventListener(setMediaQuery);
  }, []);

  const entriesPerPage = mediaQuery.matches ? 6 : 3;

  const data = [
    {
      id: 1,
      name: 'React',
      category: 'Frontend',
    },
    {
      id: 2,
      name: 'Flutter',
      category: 'Frontend',
    },
    {
      id: 3,
      name: 'React Native',
      category: 'Frontend',
    },
    {
      id: 4,
      name: 'Angular',
      category: 'Frontend',
    },
    {
      id: 5,
      name: 'Codetain',
      category: 'Company',
    },
    {
      id: 6,
      name: 'CSS',
      category: 'Frontend',
    },
    {
      id: 7,
      name: 'Gatsby',
      category: 'Frontend',
    },
    {
      id: 8,
      name: 'Iphone',
      category: 'Smartphone',
    },
    {
      id: 9,
      name: 'Iphone',
      category: 'Smartphone',
    },
    {
      id: 10,
      name: 'Iphone',
      category: 'Smartphone',
    },
    {
      id: 11,
      name: 'Iphone',
      category: 'Smartphone',
    },
    {
      id: 12,
      name: 'Iphone',
      category: 'Smartphone',
    },
    {
      id: 13,
      name: 'Iphone',
      category: 'Smartphone',
    },
  ];

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <Layout>
      <GradientBg>
        <StyledSection>
          <Container>
            <Wrapper>
              <GridContainer>
                {data.map(
                  ({ id, name, category }, index) =>
                    index >= page * entriesPerPage &&
                    index < page * entriesPerPage + entriesPerPage && <Item id={id} name={name} category={category} />
                )}
              </GridContainer>
              <Pagination
                entriesPerPage={entriesPerPage}
                onPageChange={handleChangePage}
                total={data.length}
                page={page}
              />
            </Wrapper>
          </Container>
        </StyledSection>
      </GradientBg>
    </Layout>
  );
};

export default App;
