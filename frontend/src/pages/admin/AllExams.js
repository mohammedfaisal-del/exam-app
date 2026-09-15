import { useState, useEffect } from 'react';
import api from '../../api/axios';

const AllExams = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/admin/exams')
      .then(res => setExams(res.data))
      .catch(err => setError(err.response?.data?.message || 'Failed to load exams'));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>All Exams (Platform-wide)</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {exams.map(exam => (
        <div key={exam.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 }}>
          <h3>{exam.title} {exam.isPublished ? '✅' : '📝 Draft'}</h3>
          <p>Created by: {exam.creator?.name} ({exam.creator?.email})</p>
          <p>Submissions: {exam.submissions?.length || 0}</p>
        </div>
      ))}
    </div>
  );
};

export default AllExams;