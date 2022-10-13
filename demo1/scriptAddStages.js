import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  //前30秒，用户从0增涨到20。然后接下来的1分30秒，持续模拟10个用户。然后用20秒的时间，把并发用户数从10减少到0。压测完成后显示的测试结果本文后面再说。
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://httpbin.org/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}