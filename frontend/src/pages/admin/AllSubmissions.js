import { useState, useEffect } from 'react';
import api from '../../api/axios';

const AllSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/admin/submissions')
      .then(res => setSubmissions(res.data))
      .catch(err => setError(err.response?.data?.message || 'Failed to load submissions'));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>All Submissions (Platform-wide)</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333', textAlign: 'left' }}>
            <th style={{ padding: 8 }}>Student</th>
            <th style={{ padding: 8 }}>Exam</th>
            <th style={{ padding: 8 }}>Score</th>
            <th style={{ padding: 8 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(sub => (
            <tr key={sub.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: 8 }}>{sub.student?.name}</td>
              <td style={{ padding: 8 }}>{sub.exam?.title}</td>
              <td style={{ padding: 8 }}>{sub.status === 'graded' ? sub.score : '—'}</td>
              <td style={{ padding: 8 }}>{sub.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSubmissions;