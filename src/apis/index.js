import axios from 'axios';

export const serverAxios = axios.create({
  baseURL: 'http://13.209.52.79:8080/api/v1', //서버 배포 주소
});
