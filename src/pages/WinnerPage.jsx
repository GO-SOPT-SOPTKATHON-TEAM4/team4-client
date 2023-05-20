import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 기안84 from '../assets/기안84.png';

const WinnerPage = () => {


  return (
    <>
      <St.WinnerWrapper>
        <St.WinnerHeader> 우승했어요 ! </St.WinnerHeader>
        <St.WinnerImage src ={기안84} />
        <St.BackToWorldcup>
            <button type='button'>
              랜덤 월드컵 투표 참여하기
            </button>
        </St.BackToWorldcup>
        <St.ShareMyImage>
            <button type='button'>
              내 사진 공유하기
            </button>
        </St.ShareMyImage>
        <St.Ranking> 
            <button type='button'>
              랭킹 보기
            </button>
        </St.Ranking>
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

    height: 100%; 

    `,

    WinnerHeader : styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    `,

    WinnerImage : styled.img`
    display: flex;
    width: 30rem;
    `,

    BackToWorldcup : styled.section`
    display: flex;
    `,

    Ranking : styled.section`
    display: flex;
    `,

    ShareMyImage : styled.section`
    display: flex;
    `

  };
  