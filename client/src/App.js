import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const AppWrapper = styled.div`
  text-align: center;
`;

const LogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${LogoSpin} infinite 20s linear;
  height: 80px;
  @keyframes {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>
            Welcome to React
          </AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit
          <code>
            src/App.js
          </code>
          and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;

/* eslint react/prefer-stateless-function: "off" */
