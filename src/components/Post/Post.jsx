import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostModal from './PostModal';
import { UploadButtton, RedStar } from '../../assets';

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
    setPhoto(null);
    setShowModal(false);
    setPreviewURL('');
    setNickname('');
    setDescription('');
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
      <St.PostWrapper>
        <h1>나도 이만큼 참 외롭다.....</h1>
        <h3>사진, 내용, 닉네임을 등록하고 외로움 월드컵에 참여해보세요</h3>
        <form onSubmit={handleSubmit}>
          <St.PreviewWrappper>
            {previewURL && <img src={previewURL} alt="미리보기" />}
            <St.FileWrapper>
              <label htmlFor="fileUpload">
                <UploadButtton />
                <span>사진 업로드 하기</span>
              </label>
              <input id="fileUpload" type="file" accept="image/*" onChange={handleFileChange} />
            </St.FileWrapper>
          </St.PreviewWrappper>

          <St.FormWrapper>
            <p>
              내용
              <RedStar />
            </p>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              maxLength="20"
              placeholder="20자 내로 입력해주세요."
            />
          </St.FormWrapper>
          <St.FormWrapper>
            <p>
              닉네임
              <RedStar />
            </p>
            <textarea
              id="inputNickname"
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              maxLength="10"
              placeholder="10자 내로 입력해주세요."
            />{' '}
          </St.FormWrapper>
          <St.ButtonWrapper type="submit">
            <span>등록하기</span>
          </St.ButtonWrapper>
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
    h1 {
      font-family: 'UhBeemysen';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      margin-top: 4.9rem;
    }
    h3 {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      margin-top: 0.9rem;
    }
  `,
  PreviewWrappper: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 29.5rem;
    height: 22.2rem;
    background-color: white;
    border-radius: 1.6rem;
    margin-top: 5.2rem;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      z-index: 1;
    }
  `,
  FormWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 2.9rem;
    p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: flex-start;
    }
    textarea {
      margin-top: 0.9rem;
      border-radius: 0.8rem;
      border-style: none;
      width: 29.5rem;
      height: 7.2rem;
      resize: none;
    }
    textarea::placeholder {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      padding-top: 1.2rem;
      padding-left: 1.2rem;
    }
    textarea:first-child {
      width: 29.5rem;
      height: 7.2rem;
    }
  `,
  FileWrapper: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    label > span {
      margin-top: 1.4rem;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      letter-spacing: -0.5px;
      color: #000000;
    }
    input {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
    }
  `,
  ButtonWrapper: styled.button`
    border-style: none;
    border-radius: 2.8rem;
    background-color: white;
    box-shadow: none;
    padding: 0;
    margin-top: 6rem;
    margin-bottom: 3.2rem;
    height: 5.6rem;
    width: 26.3rem;
    span {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
      color: #191919;
    }
  `,
};
