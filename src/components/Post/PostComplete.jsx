import React from 'react';
import axios from 'axios';
import barIcon from '../../assets/barIcon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 기안84 from '../../assets/기안84.png';

const PostComplete = () => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate(`/post`);
  };

  const onClickRank = () => {
    navigate(`/ranking`);
  };

  return (
    <>
      <St.UploadedWrapper>
        <St.Header>
          <h1>니 외로움 특별히 공유해줌ㅋ</h1>
          <h2>근데 진짜 외로워 보긴하더라ㅋㅋ</h2>
        </St.Header>

        <St.UploadedInfo>
          <St.UploadedImage src={기안84} />
          <h1> 설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다. </h1>
          <h2> 닉네임 칸이에요 </h2>
        </St.UploadedInfo>

        <St.BtnWrapper>
          <St.ShareUrl>
            <button type="button">
              <h2> URL 복사하기 </h2>
            </button>
          </St.ShareUrl>

          <St.BarImg>
            <img src={barIcon} alt="bar" />
          </St.BarImg>

          <St.RankingBtn onClick={onClickPost}>
            <button type="button">
              <h3> 외로움 랭킹 확인하기 </h3>
            </button>
          </St.RankingBtn>

          <St.UploadBtn onClick={onClickRank}>
            <button type="button">
              <h3> 내 외로움 등록하기 </h3>
            </button>
          </St.UploadBtn>
        </St.BtnWrapper>
      </St.UploadedWrapper>
    </>
  );
};

export default PostComplete;

const St = {
  UploadedWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,

  Header: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      text-align: center;
      letter-spacing: -0.025em;
      color: #191919;
      margin-top: 7.1rem;
    }
    h2 {
      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      letter-spacing: -0.025em;
      color: #000000;
    }
  `,

  UploadedInfo: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5.9rem;

    h1 {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: -0.408px;

      width: 31.1rem;
      margin-top: 1.2rem;
    }

    h2 {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.408px;

      width: 31.1rem;
      margin-top: 0.8rem;
    }
  `,

  UploadedImage: styled.img`
    width: 31rem;
    height: 23.3rem;
    border-radius: 1.6rem;
  `,

  BtnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  ShareUrl: styled.div`
    display: flex;
    justify-content: center;
    width: 26.3rem;
    height: 5.6rem;
    margin-top: 4.2rem;
    h2 {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
    }
    & > button {
      height: 5.6rem;
      width: 26.3rem;
      border: none;
      border-radius: 2.8rem;
      background-color: white;
    }
  `,
  BarImg: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  `,

  RankingBtn: styled.div`
    display: flex;
    justify-content: center;
    width: 26.3rem;
    height: 4.2rem;

    h3 {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
    }
    & > button {
      height: 4.2rem;
      width: 26.3rem;
      border: none;
      border-radius: 2.8rem;
      background-color: white;
    }
  `,

  UploadBtn: styled.div`
    display: flex;
    justify-content: center;
    width: 26.3rem;
    height: 4.2rem;
    margin-top: 0.8rem;
    margin-bottom: 3.5rem;

    h3 {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
    }
    & > button {
      height: 4.2rem;
      width: 26.3rem;
      border: none;
      border-radius: 2.8rem;
      background-color: white;
    }
  `,
};
