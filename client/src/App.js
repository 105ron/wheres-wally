import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './containers/NotFound';

const AppWrapper = styled.div`
  height: 100vh;
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
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;

/* eslint react/prefer-stateless-function: "off" */
