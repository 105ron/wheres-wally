import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './containers/Home';

const AppWrapper = styled.div`

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
