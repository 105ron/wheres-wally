// eslint-config-airbnb@17.1.0" has incorrect peer dependency "eslint-plugin-jsx-a11y@^6.1.1"
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

// eslint-config-airbnb@17.1.0" has incorrect peer dependency "eslint-plugin-jsx-a11y@^6.1.1"

const NavLabel = styled.h2`
  font-family: 'Varela Round', sans-serif;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonData: [],
      title: '',
    };
  }

  componentDidMount() {
    axios.get('/api/difficulties')
      .then((difficulties) => {
        const { title, buttonData } = difficulties.data;
        if (buttonData.length) {
          this.setState({
            buttonData,
            title,
          });
        }
      });
  }

  render() {
    const { buttonData, title } = this.state;
    let component = <Loader />;
    if (buttonData.length) {
      component = (
        <React.Fragment>
          <NavLabel>
            {title}
          </NavLabel>
          {buttonData.map((level) => {
            const { id, label: name, url } = level;
            return (
              <Button
                key={id}
                slug={url}
                name={name}
              />
            );
          })}
        </React.Fragment>
      );
    }
    return (
      <NavContainer>
        {component}
      </NavContainer>
    );
  }
}

export default Home;
