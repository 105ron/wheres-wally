import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './components/Home';

const AppWrapper = styled.div`
  min-height: 570px;
  min-width: 900px;
  background: linear-gradient(153deg, rgba(228, 229, 230, 0.5) 0%,
                                      rgba(0, 65, 106, 0.3) 48%,
                                      rgba(0, 65, 106, 0.3) 52%, 
                                      rgba(228, 229, 230, 0.5) 100%);
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Home />
      </AppWrapper>
    );
  }
}

export default App;

/* eslint react/prefer-stateless-function: "off" */
