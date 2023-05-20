import { client } from './axios';

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

export const postUpload = async (image, nickname, comment) => {
  try {
    const { data } = await client.post('/api/posts', image, nickname, comment, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (data.status === 200) {
      return data.data.posts;
    }
  } catch (e) {
    console.error(e);
  }
};
