import React, { useState } from 'react';
import { css, styled } from 'styled-components';

import { IcRankingBg } from '../../assets';
import { useNavigate } from 'react-router-dom';

const RankingCard = postData => {
  const navigate = useNavigate();
  const [rank, setLank] = useState(postData.rank);
  const [rankingData, setRankingData] = useState(postData.postData);

  const isFirstRanking = rank === 1;

  //   console.log(rankingData);

  //   useState(() => {

  //   }, [rankingData]);
  const [rankingData, setRankingData] = useState(postData.postData);
  //console.log(rankingData);
  return (
    <St.RankingCardWrapper
      onClick={() => {
        navigate(`/detail/${rankingData.postId}`);
      }}
      isFirstRanking={isFirstRanking}
    >
      <St.ImageWrapper>
        <img className="rankImg" src={rankingData.imageUrl} alt="미리보기사진" />
        <div>
          <IcRankingBg className="rankIcon" />
          <p className="rankTxt">{rank}</p>
        </div>
      </St.ImageWrapper>
      <St.Content className="rankContent">
        <p>{rankingData.comment}</p>
        <span>{rankingData.nickname}</span>
      </St.Content>
    </St.RankingCardWrapper>
  );
};

export default RankingCard;

const St = {
  RankingCardWrapper: styled.div`
    display: flex;
    position: relative;

    width: 34.3rem;
    height: 7rem;
    padding: 0.8rem;
    border-radius: 1.6rem;
    background-color: white;

    ${({ isFirstRanking }) =>
      isFirstRanking
        ? css`
            display: flex;
            flex-direction: column;

            height: 31rem;

            & .rankImg {
              width: 31.1rem;
              height: 23.4rem;

              position: absolute;
              top: 1.2rem;
              left: 1.4rem;
            }

            & .rankIcon {
              position: absolute;
              left: 0.3rem;

              width: 5rem;
              height: 3.3rem;
            }

            & .rankTxt {
              position: absolute;
              top: 0rem;
              left: 2.6rem;

              font-family: 'UhBeemysen';
              font-style: normal;
              font-weight: 700;
              font-size: 32px;
              line-height: 32px;
              text-align: center;
              letter-spacing: -0.025em;
            }

            & .rankContent {
              position: absolute;
              left: 1.4rem;
              bottom: 1.6rem;
            }
          `
        : css``};
  `,

  ImageWrapper: styled.div`
    display: flex;
    height: 5.4rem;

    & > img {
      width: 5.4rem;
      height: 5.4rem;

      border-radius: 0.8rem;
    }

    & > div {
      position: relative;
      & > svg {
        margin-top: 0.3rem;

        width: 2.9rem;
        height: 1.9rem;
      }

      & > p {
        position: absolute;
        top: 0.3rem;
        left: 1.1rem;
        color: white;

        font-family: 'UhBeemysen';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.408px;
      }
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0.2rem;

    & > p {
      margin-bottom: 0.8rem;

      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.408px;
    }

    & > span {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.408px;
    }
  `,
};
