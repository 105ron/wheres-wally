import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

const DifficultyButton = styled(Link)`
  position: relative;
  width: 320px;
  font-family: 'Alfa Slab One', cursive;
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

const LastLetter = styled.span`
  font-family: 'Alfa Slab One', cursive;
  font-size: 16px;
  letter-spacing: 0px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;
  background: transparent;
  color: #fff;
`;

function button(props) {
  const { changeMenu, slug, name } = props;
  const slicedName = name.slice(0, -1);
  const lastLetter = name.slice(-1);
  return (
    <DifficultyButton to={slug} onClick={changeMenu}>
      {slicedName}
      <LastLetter>
        {lastLetter}
      </LastLetter>
    </DifficultyButton>
  );
}

button.propTypes = {
  changeMenu: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default button;
