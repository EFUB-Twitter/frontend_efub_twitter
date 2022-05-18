import { serverAxios } from './index';

const PREFIX_URL = '/boards';

/*/api/v1/board
{
    "nickname": "ewha1",
    "description": "게시글 추가 내용",
    "hashTags": ["java","취준"]
    }
*/
export const twitPost = async (form) => {
  console.log(form);

  try {
    const response = await serverAxios.post(`${PREFIX_URL}`, form);
    console.log(response);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
