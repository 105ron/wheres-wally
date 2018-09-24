import React from 'react';
import styled, { keyframes } from 'styled-components';

function makeAnimation(animationSpeed=2) {
  const blankArray = Array(10).fill(null);
  const animationCSS = blankArray.map((value, index) => {
    const frame = keyframes`
    ${index + 1 + index * 5}%{transform: scaleY(1)}
    ${index + 11 + index * 5}%{transform: scaleY(1.4)}
    ${index + 21 + index * 5}%{transform: scaleY(1)}
                          100%{transform: scaleY(1)}
    `;
    return (
      `&:nth-child(${index + 1}){
        animation: ${frame} ${animationSpeed}s linear infinite;
      }`
    );
  });
  return animationCSS.join('');
}

const LoaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Load = styled.div`
  position: relative;
  height: 40px;
  width: 80px;
  &:after {
    position: absolute;
    content: 'Loading...';
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #000;
    text-align: center;
    left: 0;
    right: 0;
    bottom: -32px;
    margin: auto;
  }
`;

const Item = styled.span`
  position: relative;
  float: left;
  height: 40px;
  width: 4px;
  margin: 0 2px;
  background-color: #000;
  ${makeAnimation(2)}
`;

function Loader() {
  return (
    <LoaderContainer>
      <Load>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Load>
    </LoaderContainer>
  );
}

export default Loader;
