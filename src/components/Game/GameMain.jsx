import { IcError } from '../../assets';
import styled from 'styled-components';

const GameMain = () => {
  return (
    <St.HomeWrapper>
      {/* svg import 예시 */}
      <IcError />
      Home 컴포넌트
    </St.HomeWrapper>
  );
};

export default GameMain;

const St = {
  HomeWrapper: styled.div``,
};
