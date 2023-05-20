import { client } from './axios';

const getWorldcupList = async () => {
  const { data } = await client.get('/api/posts/tournament');
  if (data.status === 200) {
    return data.data.posts;
  }
};
