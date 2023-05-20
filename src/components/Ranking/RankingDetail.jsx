import { React, useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import belowFruitImg from '../../assets/belowFruitImg.svg';
import { getPostDetail } from '../../lib/api';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const RankingDetail = () => {
  const [detailInfo, setDetailInfo] = useState({});
  const { postId } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getPostDetail(postId);
  //       setDetailInfo(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [postId]);

  return (
    <St.RankingDetailWrapper>

      <h1>
        1<br />
        <p>

        닉네임
        </p>
        {/* {detailInfo.nickname} */}
      </h1>
      <p>{detailInfo.comment}</p>

      <CopyToClipboard
        text={`${window.location.host}/result/${postId}`}
        onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
      >
        <button type="button">URL 복사하기</button>
      </CopyToClipboard>
      <St.belowImg src = {belowFruitImg} />
    </St.RankingDetailWrapper>
  );
};

export default RankingDetail;

const St = {
  RankingDetailWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & > h1 {
      font-size: 2rem;
    }
  `,
  DisplayImg: styled.img`
    width: 100%;
    height: 30rem;
  `,

  belowImg: styled.img`
  `,
  DetailWrappper : styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-top: 11rem;
  width:34.3rem;
  height: 48.6rem;
  `
};
