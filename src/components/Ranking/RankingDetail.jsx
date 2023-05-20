import { React, useState } from 'react';

import { WORLDCUP_LIST } from '../../data/worldcupList';
import styled from 'styled-components';

const RankingDetail = () => {
  const [detailInfo, setDetailInfo] = useState(WORLDCUP_LIST[0]);
  return (
    <St.RankingDetailWrapper>
      <h1>
        1<br />
        {detailInfo.nickname}
      </h1>
      <p>{detailInfo.comment}</p>
      <button type="button">URL 복사하기</button>
    </St.RankingDetailWrapper>
  );
};

export default RankingDetail;

const St = {
  RankingDetailWrapper: styled.div`
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
