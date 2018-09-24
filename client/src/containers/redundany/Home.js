import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from '@reach/router';
import wally from '../images/wally.png';
import wallyHeader from '../images/wally2.png';
import Loader from '../containers/Loader';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url(${wally}) no-repeat right;
  background-size: contain;
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
  text-shadow: -2px -2px 1px var(--redshadow);
  font-size: 60px;
  letter-spacing: 8px;
  color: var(--wallyred);
`;

const BlueWally = RedWhere.extend`
  top: 145px;
  left: 55px;
  text-shadow: -2px -2px 1px var(--blueshadow);
  letter-spacing: 24px;
  color: var(--wallyblue);
`;

const Image = styled.img`
  float: left;
`;

class Home extends Component {
  constructor() {
    super();
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
        <Image src={wallyHeader} alt="Where's Wally" height="165" width="200" />
        {levels.length
          ? <Buttons levels={levels} />
          : <Loader />
        }
      </Wrapper>
    );
  }
}

export default Home;
