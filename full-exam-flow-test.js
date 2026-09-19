import http from 'k6/http';
import { check, sleep, group } from 'k6';

const BASE_URL = 'https://api.faisalproduction.website/api';

// export const options = {
//   stages: [
//     { duration: '20s', target: 10 },
//     { duration: '30s', target: 30 },
//     { duration: '30s', target: 50 },
//     { duration: '20s', target: 0 },
//   ],
//   thresholds: {
//     http_req_duration: ['p(95)<1500'],
//   },
// };

export const options = {
  stages: [
    { duration: '20s', target: 30 },
    { duration: '30s', target: 70 },
    { duration: '30s', target: 100 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1500'],
  },
};

export default function () {
  const uniqueId = `${__VU}_${__ITER}_${Date.now()}`;
  const email = `student_${uniqueId}@loadtest.com`;
  const password = 'Test@12345';

  let token;

  group('Register', () => {
    const res = http.post(`${BASE_URL}/auth/register`, JSON.stringify({
      name: `Load Test Student ${uniqueId}`,
      email,
      password,
      role: 'student'
    }), { headers: { 'Content-Type': 'application/json' } });

    check(res, { 'registered': (r) => r.status === 201 });
  });

  sleep(0.5);

  group('Login', () => {
    const res = http.post(`${BASE_URL}/auth/login`, JSON.stringify({
      email,
      password
    }), { headers: { 'Content-Type': 'application/json' } });

    check(res, { 'logged in': (r) => r.status === 200 });
    token = res.json('token');
  });

  if (!token) return; // stop this iteration if login failed

  const authHeaders = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } };

  sleep(0.5);

  let examId;

  group('Browse Exams', () => {
    const res = http.get(`${BASE_URL}/exams`, authHeaders);
    check(res, { 'exams loaded': (r) => r.status === 200 });

    const exams = res.json();
    if (exams && exams.length > 0) {
      examId = exams[0].id;
    }
  });

  if (!examId) return; // no exam available to take

  sleep(0.5);

  let submissionId;
  let questions = [];

  group('Start Exam', () => {
    const res = http.post(`${BASE_URL}/submissions/exams/${examId}/start`, null, authHeaders);

    // 429 here means the daily cap was hit — expected behavior, not a bug
    check(res, {
      'exam started or daily cap reached': (r) => r.status === 200 || r.status === 201 || r.status === 429,
    });

    if (res.status === 200 || res.status === 201) {
      submissionId = res.json('submission.id');
      questions = res.json('questions') || [];
    }
  });

  if (!submissionId) return; // hit daily cap or exam unavailable — stop here

  sleep(1);

  group('Answer Questions', () => {
    for (const q of questions) {
      if (!q.options || q.options.length === 0) continue;
      const selectedOptionId = q.options[0].id; // just pick the first option

      const res = http.post(`${BASE_URL}/submissions/${submissionId}/answer`, JSON.stringify({
        questionId: q.id,
        selectedOptionId
      }), authHeaders);

      check(res, { 'answer saved': (r) => r.status === 200 });
      sleep(0.3);
    }
  });

  group('Finish Exam', () => {
    const res = http.post(`${BASE_URL}/submissions/${submissionId}/finish`, null, authHeaders);
    check(res, { 'exam finished': (r) => r.status === 200 });
  });

  sleep(1);
}