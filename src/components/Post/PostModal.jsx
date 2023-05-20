import React from 'react';
import styled from 'styled-components';

const PostModal = ({ show, onCancel, onConfirm }) => {
  if (!show) return null;

  return (
    <St.ModalContainer>
      <St.ModalWrapper>
        <p>
          등록하시겠습니까? <br />
          <span>등록 후에는 삭제가 불가능합니다.</span>
        </p>
        <St.ButtonWrapper>
          <button className="cancelButton" onClick={onCancel}>
            취소하기
          </button>
          <button className="confirmButton" onClick={onConfirm}>
            등록하기
          </button>
        </St.ButtonWrapper>
      </St.ModalWrapper>
    </St.ModalContainer>
  );
};

export default PostModal;
const St = {
  ModalContainer: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  ModalWrapper: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: lightgray;
    width: 27rem;
    height: 17.3rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1.6rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }
    p > span {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #ff4c34;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-around;

    button {
      width: 11.6rem;
      height: 4.2rem;
      border-style: none;
      border-radius: 2.8rem;
      background-color: white;
      box-shadow: none;
      padding: 0;
      margin-top: 2.3rem;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.025em;
      color: #191919;
    }
    .confirmButton {
      background-color: #ffe470;
      margin-left: 0.7rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .cancelButton {
      border-style: solid;
      border-width: 0.1rem;
      margin-right: 0.7rem;
      border-color: #ffe470;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  `,
};
