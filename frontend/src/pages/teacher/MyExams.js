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
//     <div className="page">
//       <h2>My Exams</h2>
//       {error && <div className="alert alert-error">{error}</div>}
//       {exams.length === 0 && !error && <p className="subtitle">You haven't created any exams yet.</p>}
//       {exams.map(exam => (
//         <div key={exam.id} className="card">
//           <h3>
//             {exam.title}{' '}
//             <span className={`badge ${exam.isPublished ? 'badge-published' : 'badge-draft'}`}>
//               {exam.isPublished ? 'Published' : 'Draft'}
//             </span>
//           </h3>
//           <p className="subtitle">Submissions: {exam.submissions?.length || 0}</p>
//           <Link to={`/teacher/exams/${exam.id}/results`} className="btn btn-primary" style={{ width: 'auto' }}>
//             View Results
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyExams;

//////////////////////////////////////////////

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../api/axios';

// const MyExams = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get('/exams/mine')
//       .then(res => setExams(res.data))
//       .catch(err => setError(err.response?.data?.message || 'فشل تحميل الاختبارات'));
//   }, []);

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <h2>اختباراتي</h2>
//       {error && <div className="alert alert-error">{error}</div>}
//       {exams.length === 0 && !error && <p className="subtitle">لم تقم بإنشاء أي اختبار حتى الآن.</p>}
//       {exams.map(exam => (
//         <div key={exam.id} className="card">
//           <h3>
//             {exam.title}{' '}
//             <span className={`badge ${exam.isPublished ? 'badge-published' : 'badge-draft'}`}>
//               {exam.isPublished ? 'منشور' : 'مسودة'}
//             </span>
//           </h3>
//           <p className="subtitle">عدد المشاركات: {exam.submissions?.length || 0}</p>
//           <Link to={`/teacher/exams/${exam.id}/results`} className="btn btn-primary" style={{ width: 'auto' }}>
//             عرض النتائج
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyExams;

//////////////////////////////////////////////

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const MyExams = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadExams();
  }, []);

  const loadExams = () => {
    api.get('/exams/mine')
      .then(res => setExams(res.data))
      .catch(err => setError(err.response?.data?.message || 'فشل تحميل الاختبارات'));
  };

  const handleDelete = async (examId, title) => {
    if (!window.confirm(`هل أنت متأكد من حذف اختبار "${title}"؟ لا يمكن التراجع عن هذا الإجراء.`)) {
      return;
    }

    setDeletingId(examId);
    setError('');
    try {
      await api.delete(`/exams/${examId}`);
      setExams(exams.filter(e => e.id !== examId));
    } catch (err) {
      setError(err.response?.data?.message || 'فشل حذف الاختبار');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
      <h2>اختباراتي</h2>
      {error && <div className="alert alert-error">{error}</div>}
      {exams.length === 0 && !error && <p className="subtitle">لم تقم بإنشاء أي اختبار حتى الآن.</p>}
      {exams.map(exam => (
        <div key={exam.id} className="card">
          <h3>
            {exam.title}{' '}
            <span className={`badge ${exam.isPublished ? 'badge-published' : 'badge-draft'}`}>
              {exam.isPublished ? 'منشور' : 'مسودة'}
            </span>
          </h3>
          <p className="subtitle">عدد المشاركات: {exam.submissions?.length || 0}</p>
          <div className="btn-row">
            <Link to={`/teacher/exams/${exam.id}/results`} className="btn btn-primary" style={{ width: 'auto' }}>
              عرض النتائج
            </Link>
            <button
              onClick={() => handleDelete(exam.id, exam.title)}
              disabled={deletingId === exam.id}
              className="btn btn-danger"
              style={{ width: 'auto' }}
            >
              {deletingId === exam.id ? 'جاري الحذف...' : 'حذف الاختبار'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyExams;