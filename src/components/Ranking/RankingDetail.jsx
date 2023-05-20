import { React, useEffect, useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import belowFruitImg from '../../assets/belowFruitImg.svg';
import { RANKING_DATA } from '../../data/worldcupList';
import { getPostDetail } from '../../lib/api';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import 기안84 from '../../assets/기안84.png';

const RankingDetail = () => {
  const [detailInfo, setDetailInfo] = useState({});
  const { postId } = useParams();
  const [showToast, setShowToast] = useState(false);

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
      <St.DetailWrappper>
        <St.DisplayImg src={기안84} alt="이미지" />
        <St.Comment>
          설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다. {/*detailInfo.comment*/}
        </St.Comment>
        <St.NickName>닉네임 칸입니다. 닉네임 칸이에요 {/* {detailInfo.nickname} */}</St.NickName>
        <St.Vote
          text={`${window.location.host}/result/${postId}`}
          onCopy={() => alert('링크가 클립보드에 복사되었어요!')}
        >
          투표하러 가기
        </St.Vote>
      </St.DetailWrappper>

      <St.belowImg src={belowFruitImg} />
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
    justify-content: center;
    gap: 2rem;

    & > h1 {
      font-size: 2rem;
    }
  `,

  DetailWrappper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;
    margin-bottom: 0.9rem;

    width: 34.3rem;
    height: 48.6rem;

    background: #ffffff;
    box-shadow: 0rem 0.3rem 1rem rgba(0, 0, 0, 0.05);
    border-radius: 1.6rem;
  `,

  Comment: styled.h1`
    margin-top: 2rem;
    width: 31.1rem;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.5px;
  `,

  DisplayImg: styled.img`
    width: 31.1rem;
    height: 23.4rem;
    margin-top: 2.4rem;
    border-radius: 0.8rem;
  `,

  NickName: styled.h2`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    text-align: center;
    letter-spacing: -0.5px;

    margin-top: 1.2rem;
  `,

  Vote: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 6.2rem;
    width: 29.6rem;
    margin-top: 4.2rem;
    background: #ffe470;
    border: none;
    border-radius: 42px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
  `,

  belowImg: styled.img`
    margin-bottom: 1.6rem;
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
