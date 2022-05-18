import { serverAxios } from './index';

const PREFIX_URL = '/user';

export const signup = async (form) => {
  let response;
  try {
    response = await serverAxios.post(`${PREFIX_URL}/signup`, form);
    console.log(response);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
