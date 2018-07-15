import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import wally from '../images/wally.png';
import wallyHeader from '../images/wally2.png';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  min-height: 530px;
  min-width: 900px;
  background: url(${wally}) no-repeat right;
  background-size: contain; 
  --width: calc(100%);
  &:after {
    content: var(--width);
  }
`;

// Reference for the angle header RedWhere and BluWhere elements only
const Header = styled.h1`
  position: absolute;
  top: 20px;
  margin: 0;
`;

const RedWhere = styled.span`
  position:absolute;
  transform: rotate(-35deg);
  top: 105px;
  left:35px
  font-family: 'Alfa Slab One', cursive;
  text-shadow: -2px 2px 1px rgba(244, 85, 58, 0.7);
  font-size: 60px;
  letter-spacing: 8px;
  color: var(--wallyred);
`;

const BlueWally = RedWhere.extend`
  top: 145px;
  left: 55px;
  text-shadow: -2px 2px 1px rgba(87, 114, 183, 0.7);
  letter-spacing: 24px;
  color: var(--wallyblue);
`;

const NavContainer = styled.div`
  margin: 0 20%;
  height: 100%;
  padding-top: 200px;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      levels: [
        {
          thing: '',
        },
      ],
    };
  }

  componentDidMount() {
    axios.get('/api/difficulties')
      .then((levels) => {
        if (levels.length) {
          this.setState({ levels });
          // this.getDrink(levels[0].id)
        } else {
          this.setState({ levels: [] });
        }
      });
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { levels } = this.state;
    const pStyle = { textAlign: 'center' };
    return (
      <Wrapper>

        <Header>
          <RedWhere>
            Where&apos;s
          </RedWhere>
          <br />
          <BlueWally>
            Wally?
          </BlueWally>
        </Header>
        <img src={wallyHeader} alt="Where's Wally" height="165" width="200" />
        <NavContainer>
          {/* Nav content here */}
          {levels.map(thing => (
            <p style={pStyle}>
              {thing.name}
            </p>
          ))}

        </NavContainer>
      </Wrapper>
    );
  }
}

export default Home;

/* eslint class-methods-use-this: "off", no-console: "off" */
