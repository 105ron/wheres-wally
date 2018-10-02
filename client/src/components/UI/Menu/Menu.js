import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

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

function menu(props) {
  const {
    buttonData, title, children, clickHandler,
  } = props;
  return (
    <NavContainer>
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
            changeMenu={clickHandler}
          />
        );
      })}
      {children}
    </NavContainer>
  );
}

menu.defaultProps = {
  title: 'Make your selection',
  buttonData: [
    {
      id: 1,
      label: 'Play Game',
      url: '/levels',
    },
    {
      id: 2,
      label: 'High Scores',
      url: '/high-scores',
    },
  ],
  children: null,
  clickHandler: () => {},
};

menu.propTypes = {
  title: PropTypes.string,
  buttonData: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
  children: PropTypes.node,
  clickHandler: PropTypes.func,
};

export default menu;
