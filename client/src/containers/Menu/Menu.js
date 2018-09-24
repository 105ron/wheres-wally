import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../../components/UI/Button/Button';
import Loader from '../../components/UI/Loader/Loader';

const NavContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavLabel = styled.h2`
  font-family: 'Varela Round', sans-serif;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
    };
  }

  componentDidMount() {
    axios.get('/api/difficulties')
      .then((difficulties) => {
        const [...levels] = difficulties.data;
        if (levels.length) {
          this.setState({ levels });
        }
      });
  }

  render() {
    const { levels } = this.state;
    let component = <Loader />;
    if (levels.length) {
      component = levels.map((level) => {
        const { id: slug, name } = level;
        return (
          <Button
            slug={slug}
            key={slug}
            name={name}
          />
        );
      });
    }
    return (
      <NavContainer>
        <NavLabel>
          Choose Your level
        </NavLabel>
        {component}
      </NavContainer>
    );
  }
}

export default Home;
