import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './containers/Home';

const AppWrapper = styled.div`
  background: linear-gradient(153deg, #e4e5e678 0%,#00416a62 50%,#e4e5e678 100%);
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
