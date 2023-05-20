import { client } from './axios';

// 게시글 토너먼트 이미지 제공 API
export const getWorldcupList = async () => {
  try {
    const { data } = await client.get('/api/posts/tournament');
    if (data.status === 200) {
      return data.data.posts;
    }
  } catch (e) {
    console.error(e);
  }
};

// 게시글 상세조회 API
export const getPostDetail = async postId => {
  try {
    const { data } = await client.get(`/api/posts/${postId}`);
    if (data.status === 200) {
      return data.data;
    }
  } catch (e) {
    console.error(e);
  }
};

// 게시글 랭킹 조회 API
export const getRanking = async () => {
  try {
    const { data } = await client.get('/api/posts/ranking');
    if (data.status === 200) {
      return data.data.posts;
    }
  } catch (e) {
    console.error(e);
  }
};

// 게시글 업로드 API
export const postUpload = async (image, nickname, comment) => {
  try {
    const { data } = await client.post('/api/posts', image, nickname, comment, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (e) {
    console.error(e);
  }
};

// 게시글 랭킹 업데이트 API
export const updateRanking = async postId => {
  try {
    const { data } = await client.post(`/api/posts/${postId}/ranking`);
    if (data.status === 200) {
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};
