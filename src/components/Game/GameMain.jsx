import { IcProgress1, IcProgress2, IcProgress3, IcProgress4 } from '../../assets';
import { useEffect, useState } from 'react';

import { WORLDCUP_LIST } from '../../data/worldcupList';
import styled from 'styled-components';

const GameMain = () => {
  const [wordcupList, setWordcupList] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [gameCnt, setGameCnt] = useState(1);
  const [isOver, setIsOver] = useState(false);
  const [round, setRound] = useState('8강');

  const PROGRESSBAR_ICON = [IcProgress1, IcProgress2, IcProgress3, IcProgress4];
  const [progressbar, setProgressbar] = useState(PROGRESSBAR_ICON[0]);

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
    handleRound();

    if (gameCnt === WORLDCUP_LIST.length) {
      setIsOver(true);
    }
  };

  if (isOver) return;

  const handleRound = () => {
    if (gameCnt < 4) {
      setRound('8강');
      setProgressbar(PROGRESSBAR_ICON[0]);
    } else if (gameCnt >= 4 && gameCnt < 6) {
      setRound('4강');
      setProgressbar(PROGRESSBAR_ICON[1]);
    } else if (gameCnt >= 6 && gameCnt < 7) {
      setRound('2강');
      setProgressbar(PROGRESSBAR_ICON[2]);
    } else if (gameCnt >= 7) {
      setRound('우승');
      setProgressbar(PROGRESSBAR_ICON[3]);
    }
  };

  return (
    <St.GameMainWrapper>
      <h1>가장 외로운 사람은?</h1>
      <p>
        {round}
        {progressbar}
      </p>
      {displays.map(display => {
        return (
          <div key={display.postId} onClick={clickHandler(display)}>
            <St.DisplayImg src={display.imageUrl} alt={display.comment} />
            <p>{display.nickname}</p>
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
