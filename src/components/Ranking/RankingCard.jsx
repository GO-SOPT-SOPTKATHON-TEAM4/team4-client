import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const RankingCard = postData => {
  const navigate = useNavigate();

  const [rankingData, setRankingData] = useState(postData.postData);
  //console.log(rankingData);
  return (
    <div
      onClick={() => {
        navigate(`/detail/${rankingData.postId}`);
      }}
    >
      {rankingData.postId}
      {rankingData.nickname}
      {rankingData.comment}
    </div>
  );
};

export default RankingCard;
