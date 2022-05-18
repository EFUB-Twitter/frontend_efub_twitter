import { serverAxios } from './index';

const PREFIX_URL = '/boards';
/*/api/v1/boards/{boardId}?nickname={nickname}*/
export const twitDelete = async (boardId, nickname) => {
  try {
    const response = await serverAxios.delete(`${PREFIX_URL}/${boardId}?nickname=${nickname}`);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
