import HttpClient from '@/utils/commonUtils';
import { config } from '@/configs/index';

const http$ = new HttpClient(config.baseUrl);

export default {
  login(data) {
    return http$.request({
      url: 'login',
      method: 'post',
      data
    });
  },
  rcajTest(data) {
    return http$.request({
      url: 'talent/talentcontent/page.do',
      method: 'post',
      data
    });
  }
};
