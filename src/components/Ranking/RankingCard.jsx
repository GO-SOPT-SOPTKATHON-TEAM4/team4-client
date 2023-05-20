import React, { useState } from 'react';

import { IcRankingBg } from '../../assets';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RankingCard = postData => {
  const navigate = useNavigate();
  const [rank, setLank] = useState(1);
  const [rankingData, setRankingData] = useState(postData.postData);
  //   console.log(rankingData);

  //   useState(() => {

  //   }, [rankingData]);

  return (
    <St.RankingCardWrapper
      onClick={() => {
        navigate(`/detail/${rankingData.postId}`);
      }}
    >
      <St.ImageWrapper>
        <img src={rankingData.imageUrl} alt="미리보기사진" />
        <div>
          <IcRankingBg />
          <p>{rank}</p>
        </div>
      </St.ImageWrapper>
      <St.Content>
        <p>{rankingData.comment}</p>
        <span>{rankingData.nickname}</span>
      </St.Content>
    </St.RankingCardWrapper>
  );
};

export default RankingCard;

const St = {
  FirstRanking: styled.div``,

  RankingCardWrapper: styled.div`
    display: flex;

    width: 34.3rem;
    height: 7rem;
    padding: 0.8rem;

    border-radius: 1.6rem;
    background-color: white;
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
        left: 1.3rem;
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
