// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const ExamList = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     api
//       .get("/exams")
//       .then(res => setExams(res.data))
//       .catch(err =>
//         setError(err.response?.data?.message || "Failed to load exams")
//       );
//   }, []);

//   const handleStart = examId => {
//     navigate(`/student/exams/${examId}/take`);
//   };

//   return (
//     <div
//       style={{ maxWidth: 700, margin: "40px auto", fontFamily: "sans-serif" }}
//     >
//       <h2>Available Exams</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {exams.length === 0 && !error && <p>No exams available right now.</p>}
//       {/* {exams.map(exam => (
//         <div key={exam.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12 }}>
//           <h3>{exam.title}</h3>
//           <p>{exam.description}</p>
//           <p>Duration: {exam.durationMinutes} minutes</p>
//           <p>Window: {new Date(exam.startTime).toLocaleString()} → {new Date(exam.endTime).toLocaleString()}</p>
//           <button onClick={() => handleStart(exam.id)} style={{ padding: 8 }}>Start Exam</button>
//         </div>
//       ))} */}
//       {exams.map(exam => {
//         const now = new Date();
//         const start = new Date(exam.startTime);
//         const end = new Date(exam.endTime);
//         const notYetOpen = now < start;
//         const closed = now > end;

//         return (
//           <div
//             key={exam.id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: 8,
//               padding: 16,
//               marginBottom: 12,
//             }}
//           >
//             <h3>{exam.title}</h3>
//             <p>{exam.description}</p>
//             <p>Duration: {exam.durationMinutes} minutes</p>
//             <p>
//               Window: {start.toLocaleString()} → {end.toLocaleString()}
//             </p>
//             {notYetOpen && (
//               <p style={{ color: "orange" }}>
//                 Opens at {start.toLocaleString()}
//               </p>
//             )}
//             {closed && (
//               <p style={{ color: "red" }}>This exam window has closed</p>
//             )}
//             <button
//               onClick={() => handleStart(exam.id)}
//               disabled={notYetOpen || closed}
//               style={{ padding: 8 }}
//             >
//               Start Exam
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ExamList;

////////////////////////////////////////////////

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const ExamList = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     api
//       .get("/exams")
//       .then(res => setExams(res.data))
//       .catch(err =>
//         setError(err.response?.data?.message || "Failed to load exams")
//       );
//   }, []);

//   const handleStart = examId => {
//     navigate(`/student/exams/${examId}/take`);
//   };

//   return (
//     <div className="page">
//       <h2>Available Exams</h2>
//       {error && <div className="alert alert-error">{error}</div>}

//       {exams.length === 0 && !error && (
//         <div className="empty-state">
//           <p>No exams available right now.</p>
//         </div>
//       )}

//       {exams.map(exam => {
//         const now = new Date();
//         const start = new Date(exam.startTime);
//         const end = new Date(exam.endTime);
//         const notYetOpen = now < start;
//         const closed = now > end;

//         return (
//           <div key={exam.id} className="card">
//             <h3 style={{ margin: 0 }}>{exam.title}</h3>
//             <p className="subtitle" style={{ margin: "6px 0" }}>{exam.description}</p>

//             <div className="exam-meta">
//               <span>⏱ {exam.durationMinutes} min</span>
//               <span>📅 {start.toLocaleString()} → {end.toLocaleString()}</span>
//             </div>

//             {notYetOpen && (
//               <div className="status-note upcoming">Opens at {start.toLocaleString()}</div>
//             )}
//             {closed && (
//               <div className="status-note closed">This exam window has closed</div>
//             )}

//             <div>
//               <button
//                 onClick={() => handleStart(exam.id)}
//                 disabled={notYetOpen || closed}
//                 className="btn btn-primary"
//                 style={{ width: 'auto' }}
//               >
//                 Start Exam
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ExamList;


////////////////////////////////////////////////
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const ExamList = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     api
//       .get("/exams")
//       .then(res => setExams(res.data))
//       .catch(err =>
//         setError(err.response?.data?.message || "فشل تحميل الاختبارات")
//       );
//   }, []);

//   const handleStart = examId => {
//     navigate(`/student/exams/${examId}/take`);
//   };

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <h2>الاختبارات المتاحة</h2>
//       {error && <div className="alert alert-error">{error}</div>}

//       {exams.length === 0 && !error && (
//         <div className="empty-state">
//           <p>لا توجد اختبارات متاحة حالياً.</p>
//         </div>
//       )}

//       {exams.map(exam => {
//         const now = new Date();
//         const start = new Date(exam.startTime);
//         const end = new Date(exam.endTime);
//         const notYetOpen = now < start;
//         const closed = now > end;

//         return (
//           <div key={exam.id} className="card">
//             <h3 style={{ margin: 0 }}>{exam.title}</h3>
//             <p className="subtitle" style={{ margin: "6px 0" }}>{exam.description}</p>

//             <div className="exam-meta">
//               <span>المدة: {exam.durationMinutes} دقيقة</span>
//               <span>الفترة: {start.toLocaleString()} إلى {end.toLocaleString()}</span>
//             </div>

//             {notYetOpen && (
//               <div className="status-note upcoming">يبدأ في {start.toLocaleString()}</div>
//             )}
//             {closed && (
//               <div className="status-note closed">انتهت فترة هذا الاختبار</div>
//             )}

//             <div>
//               <button
//                 onClick={() => handleStart(exam.id)}
//                 disabled={notYetOpen || closed}
//                 className="btn btn-primary"
//                 style={{ width: 'auto' }}
//               >
//                 بدء الاختبار
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ExamList;


////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";

const ExamList = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/exams")
      .then(res => setExams(res.data))
      .catch(err =>
        setError(err.response?.data?.message || "فشل تحميل الاختبارات")
      );
  }, []);

  const handleStart = examId => {
    navigate(`/student/exams/${examId}/take`);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">الاختبارات المتاحة</h2>
          <Link to="/student" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            الرجوع إلى لوحة التحكم
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        {exams.length === 0 && !error && (
          <div className="text-center py-16">
            <p className="text-sm text-slate-500">لا توجد اختبارات متاحة حالياً.</p>
          </div>
        )}

        <div className="space-y-4">
          {exams.map(exam => {
            const now = new Date();
            const start = new Date(exam.startTime);
            const end = new Date(exam.endTime);
            const notYetOpen = now < start;
            const closed = now > end;

            return (
              <div key={exam.id} className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{exam.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{exam.description}</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-slate-500 mt-3">
                  <span>المدة: {exam.durationMinutes} دقيقة</span>
                  <span>الفترة: {start.toLocaleString()} إلى {end.toLocaleString()}</span>
                </div>

                {notYetOpen && (
                  <div className="inline-block mt-3 text-sm font-medium text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5">
                    يبدأ في {start.toLocaleString()}
                  </div>
                )}
                {closed && (
                  <div className="inline-block mt-3 text-sm font-medium text-red-700 bg-red-50 rounded-lg px-3 py-1.5">
                    انتهت فترة هذا الاختبار
                  </div>
                )}

                <div className="mt-4">
                  <button
                    onClick={() => handleStart(exam.id)}
                    disabled={notYetOpen || closed}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg px-5 py-2 transition-colors"
                  >
                    بدء الاختبار
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExamList;