import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <St.LandingWrapper>
      <p>내가 세상에서</p>
      <h1>제일 외로워!</h1>
      <St.Content>
        <p>익명성을 기반으로</p>
        <p>나의 외로움을 자랑해보세요</p>
      </St.Content>
      <button type="button" onClick={() => navigate('/game')}>
        외로움 월드컵 참여하기
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

    & > button {
      border: none;
      background: transparent;
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
