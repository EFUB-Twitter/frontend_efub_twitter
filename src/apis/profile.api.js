import { serverAxios } from './index';

const PREFIX_URL = '/profiles';

//http://13.209.52.79:8080/api/v1/profiles/efub

export const getProfile = async (nickname) => {
  console.log('프로필 닉네임', nickname);
  try {
    const response = await serverAxios.get(`${PREFIX_URL}/${nickname}`);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
