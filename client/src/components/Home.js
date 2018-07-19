import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group';
import wally from '../images/wally.png';
import wallyHeader from '../images/wally2.png';
import Loader from '../containers/Loader';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
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

const DifficultyButton = styled.button`
  position:relative;
  width: 320px;
  font-family: 'Alfa Slab One',cursive;
  font-size: 16px;
  letter-spacing: 8px;
  text-align: center;
  cursor: pointer;
  padding: 25px 80px;
  margin: 15px 30px;
  text-transform: uppercase;
  transition: all 0.3s;
  background: var(--wallyblue);
  color: #fff;
  border-radius: 50px;
  border: 3px solid black;
  &:hover:before {
    left: 80%;
    opacity: 1;
  }
  &:before {
    position: absolute;
    line-height: 16px;
    left: 70%;
    opacity: 0;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    transition: all 0.3s;
    content: "→";
  }
  &:hover {
    background: var(--blueshadow);
  }
  `;

function Buttons(props) {
  const { levels } = props;
  return (
      <NavContainer>
        <NavLabel>
          Choose Your level
        </NavLabel>
        {levels.map(levelObj => (
          <DifficultyButton key={levelObj.id}>
            {levelObj.name}
          </DifficultyButton>
        ))}
      </NavContainer>
  );
}

Buttons.propTypes = {
  levels: PropTypes.array.isRequired,
};

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
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={4500}
          transitionLeaveTimeout={4300}
        >
          {levels.length
            ? <Buttons levels={levels} key="1" />
            : <Loader key="2" />
          }
        </CSSTransitionGroup>
      </Wrapper>
    );
  }
}

export default Home;
