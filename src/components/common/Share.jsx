import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { RANKING_DATA } from '../../data/worldcupList';
import { getPostDetail } from '../../lib/api';
import styled from 'styled-components';

const Share = () => {
  const [detailInfo, setDetailInfo] = useState({});
  const { postId } = useParams();

  const navigate = useNavigate();

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

      <button
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        투표하러가기
      </button>
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
