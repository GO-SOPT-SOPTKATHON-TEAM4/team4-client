import { IcLogo, IcMainLogo } from '../../assets';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <St.LandingWrapper>
      <IcLogo className="logo" />
      <IcMainLogo className="mainlogo" />
      <p>내가 세상에서</p>
      <h1>제일 외로워!</h1>
      <St.Content>
        <p>익명성을 기반으로</p>
        <p>나의 외로움을 자랑해보세요</p>
      </St.Content>
      <button type="button" onClick={() => navigate('/game')}>
        투표하러가기
      </button>
    </St.LandingWrapper>
  );
};

export default Landing;

const St = {
  LandingWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > .logo {
      margin-top: 4.3rem;
    }
    & > .mainlogo {
      margin-top: 7.2rem;
      width: 15.9rem;
      height: 20.8rem;
    }
    & > p {
      margin-top: 3.2rem;
      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
    }
    & > h1 {
      margin-bottom: 0.3rem;
      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 60px;
      text-align: center;
      letter-spacing: -0.408px;
    }

    & > button {
      position: fixed;
      bottom: 6rem;

      padding: 1.7rem 9rem;

      border: none;
      border-radius: 2.8rem;
      background: white;

      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      letter-spacing: -0.408px;
    }
  `,
};
