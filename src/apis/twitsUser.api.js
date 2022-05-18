import { serverAxios } from './index';

const PREFIX_URL = '/boards';
//nickname = {nickname}
export const twitsUser = async (nickname) => {
  try {
    const response = await serverAxios.get(`${PREFIX_URL}?nickname=${nickname}`);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
