import { IcError } from '../../assets';
import styled from 'styled-components';

const Home = () => {
  return (
    <St.HomeWrapper>
      {/* svg import 예시 */}
      <IcError />
      Home 컴포넌트입니다.
    </St.HomeWrapper>
  );
};

export default Home;

const St = {
  HomeWrapper: styled.div``,
};
