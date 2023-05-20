import React from 'react';
import styled from 'styled-components';

const GameResult = () => {
  return <div>게임결과</div>;
};

export default GameResult;
const St = {
  GameResultWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    & > h1 {
      font-size: 2rem;
    }
  `,
  ResultImg: styled.img`
    width: 100%;
    height: 30rem;
  `,
};
