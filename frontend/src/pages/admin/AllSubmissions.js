// import { useState, useEffect } from 'react';
// import api from '../../api/axios';

// const AllSubmissions = () => {
//   const [submissions, setSubmissions] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get('/admin/submissions')
//       .then(res => setSubmissions(res.data))
//       .catch(err => setError(err.response?.data?.message || 'Failed to load submissions'));
//   }, []);

//   return (
//     <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       <h2>All Submissions (Platform-wide)</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr style={{ borderBottom: '2px solid #333', textAlign: 'left' }}>
//             <th style={{ padding: 8 }}>Student</th>
//             <th style={{ padding: 8 }}>Exam</th>
//             <th style={{ padding: 8 }}>Score</th>
//             <th style={{ padding: 8 }}>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submissions.map(sub => (
//             <tr key={sub.id} style={{ borderBottom: '1px solid #ddd' }}>
//               <td style={{ padding: 8 }}>{sub.student?.name}</td>
//               <td style={{ padding: 8 }}>{sub.exam?.title}</td>
//               <td style={{ padding: 8 }}>{sub.status === 'graded' ? sub.score : '—'}</td>
//               <td style={{ padding: 8 }}>{sub.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllSubmissions;

///////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const statusLabels = {
  graded: 'مكتمل',
  in_progress: 'قيد التنفيذ',
};

const AllSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/admin/submissions')
      .then(res => setSubmissions(res.data))
      .catch(err => setError(err.response?.data?.message || 'فشل تحميل النتائج'));
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">جميع النتائج</h2>
          <Link to="/admin" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            الرجوع إلى لوحة التحكم
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        {submissions.length === 0 && !error && (
          <p className="text-sm text-slate-500">لا توجد نتائج حتى الآن.</p>
        )}

        {/* Table view on larger screens */}
        <div className="hidden sm:block bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase">
                <th className="px-4 py-3 text-right font-semibold">الطالب</th>
                <th className="px-4 py-3 text-right font-semibold">الاختبار</th>
                <th className="px-4 py-3 text-right font-semibold">الدرجة</th>
                <th className="px-4 py-3 text-right font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(sub => (
                <tr key={sub.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-slate-900 font-medium">{sub.student?.name}</td>
                  <td className="px-4 py-3 text-slate-500">{sub.exam?.title}</td>
                  <td className="px-4 py-3 text-slate-700">{sub.status === 'graded' ? sub.score : '—'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        sub.status === 'graded'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {statusLabels[sub.status] || sub.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card view on small screens */}
        <div className="sm:hidden space-y-3">
          {submissions.map(sub => (
            <div key={sub.id} className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-900">{sub.student?.name}</p>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    sub.status === 'graded'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {statusLabels[sub.status] || sub.status}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">{sub.exam?.title}</p>
              <p className="text-sm text-slate-700 mt-1">
                الدرجة: {sub.status === 'graded' ? sub.score : '—'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSubmissions;