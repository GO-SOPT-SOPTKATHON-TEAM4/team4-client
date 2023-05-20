//import Ranking from '../components/Ranking/Ranking';

import React from 'react';
import styled from 'styled-components';

const RankingPage = () => {
  return (
    <>
      <St.RankingWrapper>
        <St.RankingHeader> 랭킹 페이지 ! </St.RankingHeader>
        <St.Ranker>
            <St.RankImage/>
            <St.RankNum> 1등 </St.RankNum>
            <St.RankName> 짱구 </St.RankName>
            <St.RankComment> 반갑습니다 외로운 짱구에요</St.RankComment>
        </St.Ranker>
      </St.RankingWrapper>
    </>
  );
};

export default RankingPage;

const St = {
    RankingWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%; 

    `,

    RankingHeader: styled.header`
    display: flex;
    `,

    Ranker : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    `,
    RankImage : styled.img`
    display: flex;

    `,
    RankNum : styled.h1`
    
    `,
    RankName : styled.h2`
    `,
    RankComment: styled.h3`
    
    `,
}