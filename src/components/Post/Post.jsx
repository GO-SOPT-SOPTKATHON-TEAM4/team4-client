import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostModal from './PostModal';

const Post = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부

  const handleFileChange = e => {
    const file = e.target.files[0];
    setPhoto(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  //모달 확인 누르면 POST
  const handleConfirm = async e => {
    setShowModal(false);
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('nickname', nickname);
    formData.append('description', description);
    try {
      const url = 'http://서버주소/게시글_생성_엔드포인트';
      q;
      const response = await axios.post(url, formData);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate('/'); //포스트 후에 홈페이지로 이동 나중에 url 고치면 됨
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <St.PostWrapper>
        <h1>나도 이만큼 참 외롭다.....</h1>
        <h3>사진, 내용, 닉네임을 등록하고 외로움 월드컵에 참여해보세요</h3>
        <St.PreviewWrappper>
          {previewURL && <img src={previewURL} alt="미리보기" />}
        </St.PreviewWrappper>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <p>닉네임 :</p>
          <input
            id="inputNickname"
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            maxLength="10"
            placeholder="10자 내로 입력해주세요."
          />
          <p>내용 :</p>
          <input
            id="inputDescription"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength="20"
            placeholder="20자 내로 입력해주세요."
          />
          <p>등록후에는 삭제가 불가능합니다.</p>
          <button type="submit">등록하기</button>
        </form>
        <PostModal show={showModal} onCancel={handleCancel} onConfirm={handleConfirm} />
      </St.PostWrapper>
    </>
  );
};

export default Post;

const St = {
  PostWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  `,
  PreviewWrappper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 15rem;
    background-color: gray;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  `,
};
