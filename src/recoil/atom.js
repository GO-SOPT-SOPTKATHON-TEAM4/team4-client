import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
//페이지가 변경되더라도 상태관리를 유지
const { persistAtom } = recoilPersist();

// unique ID 를 가지고 초기 값을 지정해주어야 합니다! (예시)
export const productInfoState = atom({
  key: 'productInfo',
  default: {
    id: '',
    title: '',
    createAt: new Date(),
    image: '',
    description: '',
    tags: {
      state: '',
      price: '',
      size: 0,
    },
    grade: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const resultState = atom({
  key: 'resultInfo',
  default: {
    id: 0,
    url: '',
    nickname: '',
    comment: '',
  },
});
