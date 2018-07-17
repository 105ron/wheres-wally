import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import wally from '../images/wally.png';
import wallyHeader from '../images/wally2.png';

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

const NavContainer = styled.div`
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
    color: #fff;
    transition: all 0.3s;
    content: "→";
  }
  &:hover {
    background: var(--blueshadow);
  }

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
      .then((difficulties) => {
        const [...levels] = difficulties.data;
        if (levels.length) {
          this.setState({ levels });
        }
      });
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
          <NavLabel>
            Choose Your level
          </NavLabel>
          {levels.map(thing => (
            <DifficultyButton key={thing.id} style={pStyle}>
              {thing.name}
            </DifficultyButton>
          ))}

        </NavContainer>
      </Wrapper>
    );
  }
}

export default Home;
