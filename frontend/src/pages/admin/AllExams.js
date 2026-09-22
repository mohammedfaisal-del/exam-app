// import { useState, useEffect } from 'react';
// import api from '../../api/axios';

// const AllExams = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get('/admin/exams')
//       .then(res => setExams(res.data))
//       .catch(err => setError(err.response?.data?.message || 'Failed to load exams'));
//   }, []);

//   return (
//     <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       <h2>All Exams (Platform-wide)</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {exams.map(exam => (
//         <div key={exam.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 }}>
//           <h3>{exam.title} {exam.isPublished ? '✅' : '📝 Draft'}</h3>
//           <p>Created by: {exam.creator?.name} ({exam.creator?.email})</p>
//           <p>Submissions: {exam.submissions?.length || 0}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllExams;

///////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const AllExams = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/admin/exams')
      .then(res => setExams(res.data))
      .catch(err => setError(err.response?.data?.message || 'فشل تحميل الاختبارات'));
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">جميع الاختبارات</h2>
          <Link to="/admin" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            الرجوع إلى لوحة التحكم
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        {exams.length === 0 && !error && (
          <p className="text-sm text-slate-500">لا توجد اختبارات حتى الآن.</p>
        )}

        <div className="space-y-3">
          {exams.map(exam => (
            <div key={exam.id} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-slate-900">{exam.title}</h3>
                <span
                  className={`self-start sm:self-auto inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    exam.isPublished
                      ? 'bg-green-50 text-green-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {exam.isPublished ? 'منشور' : 'مسودة'}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                أنشأه: {exam.creator?.name} ({exam.creator?.email})
              </p>
              <p className="text-sm text-slate-500 mt-1">
                عدد المشاركات: {exam.submissions?.length || 0}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllExams;