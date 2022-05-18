import { serverAxios } from './index';

const PREFIX_URL = '/profiles/modify';

/*/api/v1/board
{
    "nickname": "ewha1",
    "description": "게시글 추가 내용",
    "hashTags": ["java","취준"]
    }
*/
export const editProfile = async (nickname, form) => {
  //console.log('editBio', nickname, form);
  try {
    const response = await serverAxios.post(`${PREFIX_URL}/${nickname}`, form);
    return response;
  } catch (error) {
    //console.log('에러 발생', error.errors);
    return null;
  }
};
