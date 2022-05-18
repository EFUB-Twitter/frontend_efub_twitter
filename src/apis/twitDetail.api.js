import { serverAxios } from './index';

const PREFIX_URL = '/boards';

export const twitDetail = async (boardId, nickname) => {
  try {
    const response = await serverAxios.get(`${PREFIX_URL}/${boardId}?nickname=${nickname}`);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
