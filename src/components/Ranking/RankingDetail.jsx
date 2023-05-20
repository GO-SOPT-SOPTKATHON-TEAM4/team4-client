import { React, useEffect, useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import { RANKING_DATA } from '../../data/worldcupList';
import { getPostDetail } from '../../lib/api';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const RankingDetail = () => {
  const [detailInfo, setDetailInfo] = useState({});
  const { postId } = useParams();
  const [showToast, setShowToast] = useState(false);

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

  const handleCopyUrl = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false); // Reset the showToast state to false after 1 second
    }, 2000);
  };

  return (
    <St.RankingDetailWrapper>
      <h1>
        1<br />
        {detailInfo.nickname}
      </h1>
      <p>{detailInfo.comment}</p>

      <CopyToClipboard text={`${window.location.host}/share/${postId}`} onCopy={handleCopyUrl}>
        <button type="button">URL 복사하기</button>
      </CopyToClipboard>
      {showToast && <St.ToastMessage>URL이 복사되었습니다</St.ToastMessage>}
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
  ToastMessage: styled.div`
    position: fixed;
    bottom: 5rem;
    opacity: 0.9;
    background-color: #333;
    color: #fff;
    padding: 1.4rem 2.6rem;
    border-radius: 2.4rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.5px;
  `,
};
