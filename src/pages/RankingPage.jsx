import React, { useState } from 'react';

import RankingCard from '../components/Ranking/RankingCard';
import { WORLDCUP_LIST } from '../data/worldcupList';
import styled from 'styled-components';

const RankingPage = () => {
  const [rankingList, setRankingList] = useState(WORLDCUP_LIST);

  return (
    <St.RankingListWrapper>
      {rankingList.map((ranking, i) => (
        <RankingCard key={i} postData={ranking} rank={i + 1} />
      ))}
    </St.RankingListWrapper>
  );
};

export default RankingPage;

const St = {
  RankingListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & > :first-child {
      margin-top: 6.9rem;
    }

    & > :last-child {
      margin-bottom: 2.5rem;
    }
  `,
};
