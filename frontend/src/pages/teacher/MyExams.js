// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../api/axios';

// const MyExams = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get('/exams/mine')
//       .then(res => setExams(res.data))
//       .catch(err => setError(err.response?.data?.message || 'Failed to load exams'));
//   }, []);

//   return (
//     <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       <h2>My Exams</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {exams.length === 0 && !error && <p>You haven't created any exams yet.</p>}
//       {exams.map(exam => (
//         <div key={exam.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 }}>
//           <h3>{exam.title} {exam.isPublished ? '✅ Published' : '📝 Draft'}</h3>
//           <p>Submissions: {exam.submissions?.length || 0}</p>
//           <Link to={`/teacher/exams/${exam.id}/results`}>
//             <button style={{ padding: 8 }}>View Results</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyExams;


/////////////////////////////////////
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const MyExams = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/exams/mine')
      .then(res => setExams(res.data))
      .catch(err => setError(err.response?.data?.message || 'Failed to load exams'));
  }, []);

  return (
    <div className="page">
      <h2>My Exams</h2>
      {error && <div className="alert alert-error">{error}</div>}
      {exams.length === 0 && !error && <p className="subtitle">You haven't created any exams yet.</p>}
      {exams.map(exam => (
        <div key={exam.id} className="card">
          <h3>
            {exam.title}{' '}
            <span className={`badge ${exam.isPublished ? 'badge-published' : 'badge-draft'}`}>
              {exam.isPublished ? 'Published' : 'Draft'}
            </span>
          </h3>
          <p className="subtitle">Submissions: {exam.submissions?.length || 0}</p>
          <Link to={`/teacher/exams/${exam.id}/results`} className="btn btn-primary" style={{ width: 'auto' }}>
            View Results
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyExams;