import React from 'react';
import axios from 'axios';
import blackBtn from '../assets/blackBtn.svg';
import grayBtn from '../assets/grayBtn.svg';
import rectangleIcon from '../assets/rectangleIcon.svg';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import winnerIcon from '../assets/winnerIcon.svg';
import 기안84 from '../assets/기안84.png';

const WinnerPage = () => {

    const navigate = useNavigate();

    const onClickPost = () => {
        navigate(`/post`);
    }

    const onClickRank = () => {
        navigate(`/ranking`);
    }
    const onClickGame = () => {
        navigate(`/game`);
    }

  return (
    <>
      <St.WinnerWrapper>

        <St.BackToWorldcup>
            <button type='button' onClick = {onClickGame}>
              <h3> 다시 투표하기 </h3>
            </button>
        </St.BackToWorldcup>
        
        <St.Header> 
            <h1> 이 사람이 제일....
            <br/>참... 외롭다...... </h1>
        </St.Header>
        
        
        <St.WinnerInfo> 
            <St.LogoImage src ={winnerIcon} />
            <St.WinnerImage src ={기안84} />
            <h1> 설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다. 설명입니다. </h1>
            <h2> 닉네임 칸이에요 </h2>
        </St.WinnerInfo>

        <St.ShareUrl>
            <button type='button'>
            <h3> URL 복사하기 </h3>
            </button>
        </St.ShareUrl>

        <St.BtnWrapper>
            <St.ShareMyImage onClick = {onClickPost}>
                <img src = {grayBtn} />
                <button type='button'>
                <h3> 내 외로움 공유하기 </h3>
                </button>
            </St.ShareMyImage>
            <St.Ranking onClick = {onClickRank}> 
                <img src = {blackBtn} />
                <button type='button'>
                <h3> 외로움 랭킹 확인하기 </h3>
                </button>
            </St.Ranking>
        </St.BtnWrapper>

      </St.WinnerWrapper>
    </>
  );
};

export default WinnerPage;

const St = {
    WinnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `,

    BackToWorldcup : styled.section`
    display: flex;
    justify-content: flex-end;
    
    width: 100vw;
    height: 5.9rem;
    margin-top : 2.2rem;
    
    & > button {
        margin-right: 1.7rem;
        border: none;
        background: none;
        text-decoration: underline;
        & < h3 {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 2.2rem;
        }
    }
    `,
    
    Header : styled.header`
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
        /* or 125% */

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
    
    
    ShareUrl: styled.div`
    display : flex;
    justify-content: center;
    width: 100vw;
    height: 15.5rem;

    h3 {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    }
    & > button {
        margin-top: 4rem;
        height: 5.6rem;
        width: 26.3rem;
        border: none;
        border-radius: 2.8rem;
        background-color: white;
    }
    `,

    BtnWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 10.7rem;
    `,
    
    Ranking : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16.4rem;
    height: 7.5rem;
    border-radius: 37.5px;
    background: #FFFFFF;
    border: 1px solid #FFCE01;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    & > img {
        width: 1.9rem;
        height: 1.9rem;  
    }
    & > button {

        h3 {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        }
        background: none;
        border: none;
        margin-top: 0.3rem;
    }
    `,

    ShareMyImage : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 16.4rem;
    height: 7.5rem;
    border-radius: 37.5px;
    border: 1px solid #FFCE01;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    background: #FFFFFF;
    justify-content: center;
    align-items: center;    
    margin-right: 1.5rem;
    & > img {
        width: 1.9rem;
        height: 1.9rem;  
    }
    & > button {
        h3 {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        }
        background: none;
        border: none;
        margin-top: 0.3rem;
    }
    `

  };
  