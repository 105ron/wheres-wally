import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Layout from './hoc/Layout/Layout';
import Menu from './components/UI/Menu/Menu';
import MenuFromApi from './containers/MenuFromApi/MenuFromApi';
import NotFound from './components/NoPage/NoPage';

const AppWrapper = styled.div`
  height: 100vh;
  min-height: 570px;
  min-width: 900px;
  background: linear-gradient(153deg, rgba(228, 229, 230, 0.5) 0%,
                                      rgba(0, 65, 106, 0.3) 48%,
                                      rgba(0, 65, 106, 0.3) 52%, 
                                      rgba(228, 229, 230, 0.5) 100%);
`;

function app() {
  return (
    <AppWrapper>
      <Layout>
        <Router>
          <Menu path="/" />
          <MenuFromApi path="levels" />
          <MenuFromApi path="levels/:slug" />
          <MenuFromApi path="games/:slug" />
          <NotFound default />
        </Router>
      </Layout>
    </AppWrapper>
  );
}

export default app;
