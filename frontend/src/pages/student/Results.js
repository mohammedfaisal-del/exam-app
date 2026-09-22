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
//     <div className="page">
//       {justScored !== undefined && (
//         <div className="score-banner">
//           <p className="subtitle" style={{ margin: 0 }}>Exam submitted successfully</p>
//           <p className="score-value">{justScored}</p>
//         </div>
//       )}

//       <h2>My Results</h2>
//       {error && <div className="alert alert-error">{error}</div>}

//       {history.length === 0 && !error && (
//         <div className="empty-state">
//           <p>You haven't completed any exams yet.</p>
//         </div>
//       )}

//       {history.map(sub => (
//         <div key={sub.id} className="card result-row">
//           <strong>{sub.exam?.title}</strong>
//           <span className="score-badge">{sub.score} pts</span>
//         </div>
//       ))}

//       <Link to="/student" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 20 }}>
//         Back to Dashboard
//       </Link>
//     </div>
//   );
// };

// export default Results;

//////////////////////////////////////////////////////////
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
//       .catch(err => setError(err.response?.data?.message || 'فشل تحميل النتائج'));
//   }, []);

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       {justScored !== undefined && (
//         <div className="score-banner">
//           <p className="subtitle" style={{ margin: 0 }}>تم تسليم الاختبار بنجاح</p>
//           <p className="score-value">{justScored}</p>
//         </div>
//       )}

//       <h2>نتائجي</h2>
//       {error && <div className="alert alert-error">{error}</div>}

//       {history.length === 0 && !error && (
//         <div className="empty-state">
//           <p>لم تكمل أي اختبار حتى الآن.</p>
//         </div>
//       )}

//       {history.map(sub => (
//         <div key={sub.id} className="card result-row">
//           <strong>{sub.exam?.title}</strong>
//           <span className="score-badge">{sub.score} نقطة</span>
//         </div>
//       ))}

//       <Link to="/student" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 20 }}>
//         الرجوع إلى لوحة التحكم
//       </Link>
//     </div>
//   );
// };

// export default Results;

//////////////////////////////////////////////////////////////

// import { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import api from '../../api/axios';

// const Results = () => {
//   const location = useLocation();
//   const justSubmitted = location.state?.score !== undefined;
//   const [history, setHistory] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get('/submissions/my-results')
//       .then(res => setHistory(res.data))
//       .catch(err => setError(err.response?.data?.message || 'فشل تحميل النتائج'));
//   }, []);

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       {justSubmitted && (
//         <div className="score-banner">
//           <p className="subtitle" style={{ margin: 0 }}>تم استلام إجاباتك بنجاح</p>
//           <p style={{ margin: '8px 0 0', fontWeight: 600 }}>سيتم مراجعة الاختبار من قبل المعلّم، يرجى انتظار النتيجة</p>
//         </div>
//       )}

//       <h2>اختباراتي المكتملة</h2>
//       {error && <div className="alert alert-error">{error}</div>}

//       {history.length === 0 && !error && (
//         <div className="empty-state">
//           <p>لم تكمل أي اختبار حتى الآن.</p>
//         </div>
//       )}

//       {history.map(sub => (
//         <div key={sub.id} className="card result-row">
//           <strong>{sub.exam?.title}</strong>
//           <span className="subtitle">بانتظار النتيجة</span>
//         </div>
//       ))}

//       <Link to="/student" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 20 }}>
//         الرجوع إلى لوحة التحكم
//       </Link>
//     </div>
//   );
// };

// export default Results;

///////////////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import api from '../../api/axios';

const Results = () => {
  const location = useLocation();
  const justSubmitted = location.state?.score !== undefined;
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/submissions/my-results')
      .then(res => setHistory(res.data))
      .catch(err => setError(err.response?.data?.message || 'فشل تحميل النتائج'));
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {justSubmitted && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-6 text-center">
            <p className="text-sm text-slate-600">تم استلام إجاباتك بنجاح</p>
            <p className="font-semibold text-slate-900 mt-2">
              سيتم مراجعة الاختبار من قبل المعلّم، يرجى انتظار النتيجة
            </p>
          </div>
        )}

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">اختباراتي المكتملة</h2>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        {history.length === 0 && !error && (
          <div className="text-center py-16">
            <p className="text-sm text-slate-500">لم تكمل أي اختبار حتى الآن.</p>
          </div>
        )}

        <div className="space-y-3">
          {history.map(sub => (
            <div
              key={sub.id}
              className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between"
            >
              <strong className="text-slate-900 font-semibold">{sub.exam?.title}</strong>
              <span className="text-sm text-slate-500">بانتظار النتيجة</span>
            </div>
          ))}
        </div>

        <Link
          to="/student"
          className="inline-block mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          الرجوع إلى لوحة التحكم
        </Link>
      </div>
    </div>
  );
};

export default Results;