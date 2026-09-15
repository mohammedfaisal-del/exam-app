// import { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import api from '../../api/axios';

// const Results = () => {
//   const location = useLocation();
//   const justScored = location.state?.score;
//   const [history, setHistory] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get('/submissions/my-results')
//       .then(res => setHistory(res.data))
//       .catch(err => setError(err.response?.data?.message || 'Failed to load results'));
//   }, []);

//   return (
//     <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       {justScored !== undefined && (
//         <div style={{ background: '#e8f5e9', padding: 16, borderRadius: 8, marginBottom: 20 }}>
//           <h2>Exam submitted! Your score: {justScored}</h2>
//         </div>
//       )}

//       <h2>My Results</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {history.map(sub => (
//         <div key={sub.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginBottom: 8 }}>
//           <strong>{sub.exam?.title}</strong> — Score: {sub.score}
//         </div>
//       ))}

//       <Link to="/student"><button style={{ marginTop: 20, padding: 10 }}>Back to Dashboard</button></Link>
//     </div>
//   );
// };

// export default Results;

////////////////////

import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import api from '../../api/axios';

const Results = () => {
  const location = useLocation();
  const justScored = location.state?.score;
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/submissions/my-results')
      .then(res => setHistory(res.data))
      .catch(err => setError(err.response?.data?.message || 'Failed to load results'));
  }, []);

  return (
    <div className="page">
      {justScored !== undefined && (
        <div className="score-banner">
          <p className="subtitle" style={{ margin: 0 }}>Exam submitted successfully</p>
          <p className="score-value">{justScored}</p>
        </div>
      )}

      <h2>My Results</h2>
      {error && <div className="alert alert-error">{error}</div>}

      {history.length === 0 && !error && (
        <div className="empty-state">
          <p>You haven't completed any exams yet.</p>
        </div>
      )}

      {history.map(sub => (
        <div key={sub.id} className="card result-row">
          <strong>{sub.exam?.title}</strong>
          <span className="score-badge">{sub.score} pts</span>
        </div>
      ))}

      <Link to="/student" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 20 }}>
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Results;