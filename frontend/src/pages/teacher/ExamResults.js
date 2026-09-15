// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import api from '../../api/axios';

// const ExamResults = () => {
//   const { examId } = useParams();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get(`/exams/${examId}/results`)
//       .then(res => setData(res.data))
//       .catch(err => setError(err.response?.data?.message || 'Failed to load results'));
//   }, [examId]);

//   if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
//   if (!data) return <p style={{ textAlign: 'center' }}>Loading...</p>;

//   const graded = data.submissions.filter(s => s.status === 'graded');
//   const inProgress = data.submissions.filter(s => s.status === 'in_progress');
//   const avgScore = graded.length
//     ? (graded.reduce((sum, s) => sum + s.score, 0) / graded.length).toFixed(1)
//     : 0;

//   return (
//     <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       <h2>Results: {data.exam.title}</h2>
//       <p>Completed: {graded.length} | In progress: {inProgress.length} | Average score: {avgScore}</p>

//       <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
//         <thead>
//           <tr style={{ borderBottom: '2px solid #333', textAlign: 'left' }}>
//             <th style={{ padding: 8 }}>Student</th>
//             <th style={{ padding: 8 }}>Email</th>
//             <th style={{ padding: 8 }}>Score</th>
//             <th style={{ padding: 8 }}>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.submissions.map(sub => (
//             <tr key={sub.id} style={{ borderBottom: '1px solid #ddd' }}>
//               <td style={{ padding: 8 }}>{sub.student?.name}</td>
//               <td style={{ padding: 8 }}>{sub.student?.email}</td>
//               <td style={{ padding: 8 }}>{sub.status === 'graded' ? sub.score : '—'}</td>
//               <td style={{ padding: 8 }}>{sub.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Link to="/teacher/exams"><button style={{ marginTop: 20, padding: 10 }}>Back to My Exams</button></Link>
//     </div>
//   );
// };

// export default ExamResults;

/////////////////////

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/axios';

const ExamResults = () => {
  const { examId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/exams/${examId}/results`)
      .then(res => setData(res.data))
      .catch(err => setError(err.response?.data?.message || 'Failed to load results'));
  }, [examId]);

  if (error) return <div className="page"><div className="alert alert-error">{error}</div></div>;
  if (!data) return <p style={{ textAlign: 'center', marginTop: 40 }}>Loading...</p>;

  const graded = data.submissions.filter(s => s.status === 'graded');
  const inProgress = data.submissions.filter(s => s.status === 'in_progress');
  const avgScore = graded.length
    ? (graded.reduce((sum, s) => sum + s.score, 0) / graded.length).toFixed(1)
    : 0;

  return (
    <div className="page">
      <h2>Results: {data.exam.title}</h2>

      <div className="stats-row">
        <div className="stat-box">
          <div className="stat-value">{graded.length}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{inProgress.length}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{avgScore}</div>
          <div className="stat-label">Avg Score</div>
        </div>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.submissions.map(sub => (
              <tr key={sub.id}>
                <td>{sub.student?.name}</td>
                <td>{sub.student?.email}</td>
                <td>{sub.status === 'graded' ? sub.score : '—'}</td>
                <td>
                  <span className={`status-tag ${sub.status}`}>{sub.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/teacher/exams" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block' }}>
        Back to My Exams
      </Link>
    </div>
  );
};

export default ExamResults;