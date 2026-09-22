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

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import api from "../../api/axios";

// const MyExams = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState("");
//   const [deletingId, setDeletingId] = useState(null);

//   useEffect(() => {
//     loadExams();
//   }, []);

//   const loadExams = () => {
//     api
//       .get("/exams/mine")
//       .then((res) => setExams(res.data))
//       .catch((err) =>
//         setError(err.response?.data?.message || "فشل تحميل الاختبارات"),
//       );
//   };

//   const handleDelete = async (examId, title) => {
//     if (
//       !window.confirm(
//         `هل أنت متأكد من حذف اختبار "${title}"؟ لا يمكن التراجع عن هذا الإجراء.`,
//       )
//     ) {
//       return;
//     }

//     setDeletingId(examId);
//     setError("");
//     try {
//       await api.delete(`/exams/${examId}`);
//       setExams(exams.filter((e) => e.id !== examId));
//     } catch (err) {
//       setError(err.response?.data?.message || "فشل حذف الاختبار");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: "right" }}>
//       <h2>اختباراتي</h2>
//       {error && <div className="alert alert-error">{error}</div>}
//       {exams.length === 0 && !error && (
//         <p className="subtitle">لم تقم بإنشاء أي اختبار حتى الآن.</p>
//       )}
//       {exams.map((exam) => (
//         <div key={exam.id} className="card">
//           <h3>
//             {exam.title}{" "}
//             <span
//               className={`badge ${exam.isPublished ? "badge-published" : "badge-draft"}`}
//             >
//               {exam.isPublished ? "منشور" : "مسودة"}
//             </span>
//           </h3>
//           <p className="subtitle">
//             عدد المشاركات: {exam.submissions?.length || 0}
//           </p>
//           {/* <div className="btn-row">
//             <Link to={`/teacher/exams/${exam.id}/results`} className="btn btn-primary" style={{ width: 'auto' }}>
//               عرض النتائج
//             </Link>
//             <button
//               onClick={() => handleDelete(exam.id, exam.title)}
//               disabled={deletingId === exam.id}
//               className="btn btn-danger"
//               style={{ width: 'auto' }}
//             >
//               {deletingId === exam.id ? 'جاري الحذف...' : 'حذف الاختبار'}
//             </button>
//           </div> */}
//           <div className="btn-row">
//             <Link
//               to={`/teacher/exams/${exam.id}/results`}
//               className="btn btn-primary"
//               style={{ width: "auto" }}
//             >
//               عرض النتائج
//             </Link>
//             <Link
//               to={`/teacher/exams/${exam.id}/edit`}
//               className="btn btn-secondary"
//               style={{ width: "auto" }}
//             >
//               تعديل الاختبار
//             </Link>
//             <Link
//               to={`/teacher/exams/${exam.id}/questions`}
//               className="btn btn-secondary"
//               style={{ width: "auto" }}
//             >
//               إضافة أسئلة
//             </Link>
//             <button
//               onClick={() => handleDelete(exam.id, exam.title)}
//               disabled={deletingId === exam.id}
//               className="btn btn-danger"
//               style={{ width: "auto" }}
//             >
//               {deletingId === exam.id ? "جاري الحذف..." : "حذف الاختبار"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyExams;

///////////////////////////////////////////////

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

const MyExams = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadExams();
  }, []);

  const loadExams = () => {
    api
      .get("/exams/mine")
      .then((res) => setExams(res.data))
      .catch((err) =>
        setError(err.response?.data?.message || "فشل تحميل الاختبارات"),
      );
  };

  const handleDelete = async (examId, title) => {
    if (
      !window.confirm(
        `هل أنت متأكد من حذف اختبار "${title}"؟ لا يمكن التراجع عن هذا الإجراء.`,
      )
    ) {
      return;
    }

    setDeletingId(examId);
    setError("");
    try {
      await api.delete(`/exams/${examId}`);
      setExams(exams.filter((e) => e.id !== examId));
    } catch (err) {
      setError(err.response?.data?.message || "فشل حذف الاختبار");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">اختباراتي</h2>
          <Link to="/teacher" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            الرجوع إلى لوحة التحكم
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        {exams.length === 0 && !error && (
          <p className="text-sm text-slate-500">لم تقم بإنشاء أي اختبار حتى الآن.</p>
        )}

        <div className="space-y-4">
          {exams.map((exam) => (
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
                  {exam.isPublished ? "منشور" : "مسودة"}
                </span>
              </div>

              <p className="text-sm text-slate-500 mt-2">
                عدد المشاركات: {exam.submissions?.length || 0}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Link
                  to={`/teacher/exams/${exam.id}/results`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg px-4 py-2 transition-colors"
                >
                  عرض النتائج
                </Link>
                <Link
                  to={`/teacher/exams/${exam.id}/edit`}
                  className="bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors"
                >
                  تعديل الاختبار
                </Link>
                <Link
                  to={`/teacher/exams/${exam.id}/questions`}
                  className="bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors"
                >
                  إضافة أسئلة
                </Link>
                <button
                  onClick={() => handleDelete(exam.id, exam.title)}
                  disabled={deletingId === exam.id}
                  className="bg-white border border-red-200 text-red-600 text-sm font-medium rounded-lg px-4 py-2 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {deletingId === exam.id ? "جاري الحذف..." : "حذف الاختبار"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExams;
