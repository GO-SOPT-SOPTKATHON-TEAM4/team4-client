import { useEffect, useState } from 'react';

import { WORLDCUP_LIST } from '../../data/worldcupList';
import { resultState } from '../../recoil/atom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const GameMain = () => {
  const [wordcupList, setWordcupList] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [gameCnt, setGameCnt] = useState(1);
  const [resultData, setResultData] = useRecoilState(resultState);

  useEffect(() => {
    setWordcupList(WORLDCUP_LIST);
    setDisplays([WORLDCUP_LIST[0], WORLDCUP_LIST[1]]);
  }, []);

  const clickHandler = worldcupList => () => {
    if (wordcupList.length <= 2) {
      if (winners.length === 0) {
        setDisplays([worldcupList]);
      } else {
        let updatedFood = [...winners, worldcupList];
        setWordcupList(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (wordcupList.length > 2) {
      setWinners([...winners, worldcupList]);
      setDisplays([wordcupList[2], wordcupList[3]]);
      setWordcupList(wordcupList.slice(2));
    }
    setGameCnt(prev => prev + 1);

    if (gameCnt === WORLDCUP_LIST.length) {
      setResultData(winners[winners.length - 1]);
    }
  };
  console.log(resultData);

  const handleGameOver = () => {};

  return (
    <St.GameMainWrapper>
      <h1 className="title">가장 외로운 사람은?</h1>
      <p>
        {gameCnt}/{WORLDCUP_LIST.length}
      </p>
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
