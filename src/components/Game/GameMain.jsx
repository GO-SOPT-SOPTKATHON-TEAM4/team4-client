import { useEffect, useState } from 'react';

import { WORLDCUP_LIST } from '../../data/worldcupList';
import styled from 'styled-components';

const GameMain = () => {
  const [worldcupList, setWorldcupList] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    setWorldcupList(WORLDCUP_LIST);
    setDisplays([WORLDCUP_LIST[0], WORLDCUP_LIST[1]]);
  }, []);

  const clickHandler = worldcupList => () => {
    if (worldcupList.length <= 2) {
      if (winners.length === 0) {
        setDisplays([worldcupList]);
      } else {
        let updatedFood = [...winners, worldcupList];
        setWorldcupList(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (worldcupList.length > 2) {
      setWinners([...winners, worldcupList]);
      setDisplays([worldcupList[2], worldcupList[3]]);
      setWorldcupList(worldcupList.slice(2));
    }
  };

  return (
    <St.GameMainWrapper>
      <h1 className="title">가장 외로운 사람은?</h1>
      {displays.map(display => {
        return (
          <div key={display.id} onClick={clickHandler(display)}>
            <St.DisplayImg src={display.url} alt={display.comment} />
            <p>{display.comment}</p>
          </div>
        );
      })}
    </St.GameMainWrapper>
  );
};

export default GameMain;

const St = {
  GameMainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    & > h1 {
      font-size: 2rem;
    }
  `,
  DisplayImg: styled.img`
    width: 100%;
    height: 30rem;
  `,
};
