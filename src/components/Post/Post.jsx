import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Post = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');
  const [previewURL, setPreviewURL] = useState('');

  const handleFileChange = e => {
    const file = e.target.files[0];
    setPhoto(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async e => {
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
    <St.PostWrapper>
      <h1>외로움 공유</h1>
      <St.PreviewWrappper>
        {previewURL && <img src={previewURL} alt="미리보기" />}
      </St.PreviewWrappper>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <input
          type="text"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          placeholder="닉네임"
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="한 줄 사진 설명"
        />
        <button type="submit">공유하기</button>
      </form>
    </St.PostWrapper>
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
    width: 15rem;
    height: 15rem;
    img {
      height: 100%;
    }
  `,
};
