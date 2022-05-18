import { serverAxios } from './index';

const PREFIX_URL = '/boards';

export const allTwits = async () => {
  try {
    const response = await serverAxios.get(`${PREFIX_URL}`);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
