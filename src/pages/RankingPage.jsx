import React, { useState } from 'react';

import RankingCard from '../components/Ranking/RankingCard';
import { WORLDCUP_LIST } from '../data/worldcupList';

const RankingPage = () => {
  const [rankingList, setRankingList] = useState(WORLDCUP_LIST);

  return (
    <div>
      {rankingList.map((ranking, i) => (
        <RankingCard key={i} postData={ranking} />
      ))}
    </div>
  );
};

export default RankingPage;
