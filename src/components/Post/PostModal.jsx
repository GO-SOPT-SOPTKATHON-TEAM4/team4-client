import React from 'react';
import styled from 'styled-components';

const PostModal = ({ show, onCancel, onConfirm }) => {
  if (!show) return null;

  return (
    <St.ModalWrapper>
      <p>
        등록하시겠습니까? <br />
        등록 후에는 삭제가 불가능합니다.
      </p>
      <div>
        <button onClick={onCancel}>취소</button>
        <button onClick={onConfirm}>게시</button>
      </div>
    </St.ModalWrapper>
  );
};

export default PostModal;
const St = {
  ModalWrapper: styled.div`
    background-color: lightgray;
  `,
};
