import http from 'k6/http';
import { check, sleep, group } from 'k6';

const BASE_URL = 'https://api.faisalproduction.website/api';

export const options = {
  stages: [
    { duration: '30s', target: 20 },   // ramp up to 20 users
    { duration: '1m', target: 50 },    // ramp up to 50 users
    { duration: '2m', target: 50 },    // hold at 50 users
    { duration: '30s', target: 0 },    // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% of requests should be under 800ms
    http_req_failed: ['rate<0.05'],   // less than 5% failures
  },
};

export default function () {
  let token;

  group('Login', () => {
    const loginRes = http.post(`${BASE_URL}/auth/login`, JSON.stringify({
      email: 'admin@examsite.com',
      password: 'admin@12345'
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

    check(loginRes, {
      'login successful': (r) => r.status === 200,
    });

    token = loginRes.json('token');
  });

  sleep(1);

  group('Browse Exams', () => {
    const examsRes = http.get(`${BASE_URL}/exams`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    check(examsRes, {
      'exams loaded': (r) => r.status === 200,
    });
  });

  sleep(1);
}


// ///////////////////////////
// import http from 'k6/http';
// import { check, sleep, group } from 'k6';

// const BASE_URL = 'https://api.faisalproduction.website/api';

// export const options = {
//   stages: [
//     { duration: '30s', target: 30 },
//     { duration: '2m', target: 100 },
//     { duration: '1m', target: 100 },
//     { duration: '30s', target: 0 },
//   ],
// };

// export default function () {
//   const loginRes = http.post(`${BASE_URL}/auth/login`, JSON.stringify({
//     email: 'admin@examsite.com',
//     password: 'admin@12345'
//   }), { headers: { 'Content-Type': 'application/json' } });

//   const token = loginRes.json('token');
//   const authHeaders = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } };

//   // Browse exams
//   const examsRes = http.get(`${BASE_URL}/exams`, authHeaders);
//   check(examsRes, { 'got exams list': (r) => r.status === 200 });

//   const exams = examsRes.json();
//   if (exams.length > 0) {
//     const examId = exams[0].id;

//     // Start exam
//     const startRes = http.post(`${BASE_URL}/submissions/exams/${examId}/start`, null, authHeaders);
//     check(startRes, { 'exam started': (r) => r.status === 200 || r.status === 201 });
//   }

//   sleep(Math.random() * 3);
// }