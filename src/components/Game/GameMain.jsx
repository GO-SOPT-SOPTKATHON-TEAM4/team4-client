import { IcProgress1, IcProgress2, IcProgress3 } from '../../assets';
import { getWorldcupList, updateRanking } from '../../lib/api';
import { useEffect, useState } from 'react';

import { WORLDCUP_LIST } from '../../data/worldcupList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GameMain = () => {
  const [wordcupList, setWordcupList] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [gameCnt, setGameCnt] = useState(1);
  const [isOver, setIsOver] = useState(false);
  const [round, setRound] = useState('8강');

  const PROGRESSBAR_ICON = [IcProgress1, IcProgress2, IcProgress3, null];
  const [progressbar, setProgressbar] = useState(PROGRESSBAR_ICON[0]);

  const navigate = useNavigate();

  useEffect(() => {
    const getWorldCupData = async () => {
      try {
        console.log('getWorld');
        const result = await getWorldcupList();
        setWordcupList(result);
        setDisplays([result[0], result[1]]);
      } catch (error) {
        console.error(error);
      }
    };

    getWorldCupData();
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

  if (isOver) {
    navigate('/winner', { state: { winnerDisplay } });
  }

  const handleRound = () => {
    if (gameCnt < 4) {
      setRound('8강');
      setProgressbar(PROGRESSBAR_ICON[0]);
    } else if (gameCnt >= 4 && gameCnt < 6) {
      setRound('4강');
      setProgressbar(PROGRESSBAR_ICON[1]);
    } else if (gameCnt >= 6 && gameCnt < 7) {
      setRound('결승');
      setProgressbar(PROGRESSBAR_ICON[2]);
    } else if (gameCnt >= 7) {
      console.log(displays[0].postId);
      const winnerDisplay = displays[0];
      updateRanking(winnerDisplay.postId);
      navigate('/winner', { state: { winnerDisplay } });
    }
  };

  return (
    <St.GameMainWrapper>
      <p>{round}</p>
      {progressbar}
      <h1>둘 중 더 외로운 사람은...?</h1>
      {displays.map(display => {
        return (
          <St.GameCard key={display.postId} onClick={clickHandler(display)}>
            <St.DisplayImg src={display.imageUrl} alt={display.comment} />
            <div>
              <h2>{display.nickname}</h2>
              <p>{display.comment}</p>
            </div>
          </St.GameCard>
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

    & > p {
      margin-top: 2.4rem;
      margin-bottom: 0.5rem;

      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      text-align: center;
    }

    & > h1 {
      margin-top: 2.5rem;
      margin-bottom: 3.8rem;

      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      text-align: center;
      letter-spacing: -0.025em;
    }
  `,

  AfterSelect: styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  GameCard: styled.div`
    width: 29.5rem;
    height: 26.2rem;
    margin-bottom: 4.2rem;

    border-radius: 1.6rem;
    background-color: white;
    position: relative;

    &:last-child {
      margin-bottom: 0rem;
    }

    & > div {
      padding: 0.8rem 1.6rem 1rem 1.6rem;
    }

    & > div > h2 {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }

    & > div > p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
  `,

  DisplayImg: styled.img`
    width: 100%;
    height: 20rem;

    border-radius: 1.6rem 1.6rem 0 0;
  `,
};
