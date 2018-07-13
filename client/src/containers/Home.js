import React from 'react';
import styled from 'styled-components';
import wally from '../images/wally.jpg';
import wallyHeader from '../images/wally2.jpg';


const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url(${wally}) no-repeat right;
  background-size: contain; 
  --width: calc(100%);
  &:after {
    content: var(--width);
  }
`;

const WallyImage = styled.img`
  width: 200px;
`;

// Reference for the angle header element only
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
  text-shadow: -3px 2px 1px rgba(195, 199, 202, 0.8);
  font-size: 60px;
  letter-spacing: 8px;
  color: var(--wallyred);
`;

const BlueWally = RedWhere.extend`
  top: 145px;
  left: 55px;
  letter-spacing: 24px;
  color: var(--wallyblue);
`;


function Home(props) {
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

      <WallyImage src={wallyHeader} alt="Where's Wally" />
    </Wrapper>
  );
}

export default Home;
