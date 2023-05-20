import React from 'react';
import axios from 'axios';
import rectangleIcon from '../assets/rectangleIcon.svg';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
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

        <St.BackToWorldcup onClick = {onClickGame}>
            <button type='button'>
              다시 투표하기
            </button>
        </St.BackToWorldcup>
        
        <St.Header> 
            <h1> 이 사람이 제일....
            <br/>참... 외롭다...... </h1>
        </St.Header>
        
        <St.WinnerInfo>
            <h1> Winner </h1>
            <img src ={기안84} />
            <h2> 닉네임 </h2>
            <h3> 설명입니다. 설명입니다. 설명입니다. </h3>
        </St.WinnerInfo>

        <St.ShareUrl>
            <button type='button'>
              URL 공유하기
            </button>
        </St.ShareUrl>

        <St.BtnWrapper>
            <St.ShareMyImage onClick = {onClickPost}>
                <button type='button'>
                내 외로움 공유하기
                </button>
            </St.ShareMyImage>
            <St.Ranking onClick = {onClickRank}> 
                <button type='button'>
                외로움 랭킹 확인하기
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
    align-items: center;

    height: 100%; 

    `,

    BackToWorldcup : styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 5.8rem;
    
    & > button {
        margin-right: 1.7rem;
        border: none;
        background: none;
        text-decoration: underline;

        font-size: 1.2rem;
    }
    `,
    
    Header : styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 4.4rem;
    `,
    
    WinnerInfo: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 37.1rem;
    & > img {
        width: 40rem;
        height: 30rem;
    }
\
    `,
    
    
    ShareUrl: styled.div`
    display : flex;
    justify-content: center;
    width: 100vw;
    height: 11.5rem;
    
    & > button {
        margin-top: 5rem;
        height: 2rem;
    
    }
\
    `,

    BtnWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 18rem;
    `,
    
    Ranking : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    `,

    ShareMyImage : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;

    `

  };
  