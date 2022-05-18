import { serverAxios } from './index';

const PREFIX_URL = '/boards';

export const twitFilter = async (hashtags, nickname) => {
  //const { hashtags, nickname } = filter;
  let hashReq = '';
  let userReq = '';
  if (nickname) {
    userReq = `nickname=${nickname}`;
  }
  if (hashtags) {
    hashReq = hashtags
      .map((hashtag, idx) => {
        return `hashTagKeyword=${hashtag}&`;
      })
      .join('');
  }
  console.log('해시 요청', `${nickname}`);
  try {
    const response = await serverAxios.get(`${PREFIX_URL}?${hashReq + userReq}`);
    //console.log('api 요청 결과 :', response);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
