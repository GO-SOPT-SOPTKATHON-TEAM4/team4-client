import { React, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import barIcon from '../assets/barIcon.svg';
import blackBtn from '../assets/blackBtn.svg';
import grayBtn from '../assets/grayBtn.svg';
import rectangleIcon from '../assets/rectangleIcon.svg';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import winnerIcon from '../assets/winnerIcon.svg';

const WinnerPage = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const location = useLocation();
  const winnerDisplay = location.state?.winnerDisplay;
  console.log(winnerDisplay);

  const onClickPost = () => {
    navigate(`/post`);
  };

  const onClickRank = () => {
    navigate(`/ranking`);
  };
  const onClickGame = () => {
    navigate(`/game`);
  };

  const handleCopyUrl = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false); // Reset the showToast state to false after 1 second
    }, 2000);
  };
  return (
    <>
      <St.WinnerWrapper>
        <St.BackToWorldcup>
          <button type="button" onClick={onClickGame}>
            <h3> 다시 투표하기 </h3>
          </button>
        </St.BackToWorldcup>

        <St.Header>
          <h1>
            얘는 진짜
            <br />
            외로워 보인다...ㅋㅋ;;
          </h1>
        </St.Header>

        <St.WinnerInfo>
          <St.LogoImage src={winnerIcon} />
          <St.WinnerImage src={winnerDisplay.imageUrl} />
          <h1> {winnerDisplay.comment} </h1>
          <h2> {winnerDisplay.nickname} </h2>
        </St.WinnerInfo>

        <St.BtnWrapper>
          <St.ShareUrl>
            <CopyToClipboard
              text={`${window.location.host}/share/${winnerDisplay.postId}`}
              onCopy={handleCopyUrl}
            >
              <button type="button">
                <h2> URL 복사하기 </h2>
              </button>
            </CopyToClipboard>
            {showToast && <St.ToastMessage>URL이 복사되었습니다</St.ToastMessage>}
          </St.ShareUrl>

          <St.BarImg>
            <img src={barIcon} alt="bar" />
          </St.BarImg>

          <St.RankingBtn onClick={onClickRank}>
            <button type="button">
              <h3> 외로움 랭킹 확인하기 </h3>
            </button>
          </St.RankingBtn>

          <St.UploadBtn onClick={onClickPost}>
            <button type="button">내 외로움 등록하기</button>
          </St.UploadBtn>
        </St.BtnWrapper>
      </St.WinnerWrapper>
    </>
  );
};

export default WinnerPage;

const St = {
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
  WinnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  BackToWorldcup: styled.section`
    display: flex;
    justify-content: flex-end;

    width: 100vw;
    height: 5.9rem;
    margin-top: 2.2rem;

    & > button {
      margin-right: 1.7rem;
      border: none;
      background: none;
      text-decoration: underline;
      h3 {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2.2rem;
      }
    }
  `,

  Header: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 13.3rem;

    h1 {
      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      text-align: center;
      letter-spacing: -0.025em;
    }
  `,

  WinnerInfo: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 38rem;

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
      width: 31.1rem;
      margin-top: 0.4rem;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.408px;
    }
  `,

  LogoImage: styled.img`
    margin-top: 2.1rem;
    height: 2.8rem;
    width: 7.9rem;
  `,

  WinnerImage: styled.img`
    width: 31rem;
    height: 23.3rem;
    margin-top: 1.4rem;
    border-radius: 1.6rem;
  `,

  BtnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.5rem;
  `,

  ShareUrl: styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 5.6rem;
    margin-top: 4rem;
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
    height: 4.9rem;
  `,

  RankingBtn: styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
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
    width: 100vw;
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
