import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import wally from '../../assets/images/wally.png';
import wallyHeader from '../../assets/images/wally2.png';

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

const BlueWally = styled(RedWhere)`
  top: 145px;
  left: 55px;
  text-shadow: -2px -2px 1px var(--blueshadow);
  letter-spacing: 24px;
  color: var(--wallyblue);
`;

const Image = styled.img`
  float: left;
`;

function layout(props) {
  const { children } = props;
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
      {children}
    </Wrapper>
  );
}

layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;
