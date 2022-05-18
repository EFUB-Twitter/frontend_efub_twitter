import { serverAxios } from './index';

const PREFIX_URL = '/user';

export const login = async (form) => {
  try {
    const response = await serverAxios.post(`${PREFIX_URL}/login`, form);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
