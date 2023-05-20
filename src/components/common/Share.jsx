import { React, useEffect, useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import { RANKING_DATA } from '../../data/worldcupList';
import { getPostDetail } from '../../lib/api';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Share = () => {
  const [detailInfo, setDetailInfo] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const result = await getPostDetail(postId);
    //     setDetailInfo(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };a

    // fetchData();
    setDetailInfo(RANKING_DATA);
  }, [postId]);
  console.log(detailInfo);

  return (
    <St.RankingDetailWrapper>
      <h1>
        공유페이지
        <br />
        {detailInfo.nickname}
      </h1>
      <p>{detailInfo.comment}</p>

      <CopyToClipboard
        text={`${window.location.host}/detail/${postId}`}
        onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
      >
        <button type="button">URL 복사하기</button>
      </CopyToClipboard>
    </St.RankingDetailWrapper>
  );
};

export default Share;

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
