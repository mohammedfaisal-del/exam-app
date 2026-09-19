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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
      <h2>الاختبارات المتاحة</h2>
      {error && <div className="alert alert-error">{error}</div>}

      {exams.length === 0 && !error && (
        <div className="empty-state">
          <p>لا توجد اختبارات متاحة حالياً.</p>
        </div>
      )}

      {exams.map(exam => {
        const now = new Date();
        const start = new Date(exam.startTime);
        const end = new Date(exam.endTime);
        const notYetOpen = now < start;
        const closed = now > end;

        return (
          <div key={exam.id} className="card">
            <h3 style={{ margin: 0 }}>{exam.title}</h3>
            <p className="subtitle" style={{ margin: "6px 0" }}>{exam.description}</p>

            <div className="exam-meta">
              <span>المدة: {exam.durationMinutes} دقيقة</span>
              <span>الفترة: {start.toLocaleString()} إلى {end.toLocaleString()}</span>
            </div>

            {notYetOpen && (
              <div className="status-note upcoming">يبدأ في {start.toLocaleString()}</div>
            )}
            {closed && (
              <div className="status-note closed">انتهت فترة هذا الاختبار</div>
            )}

            <div>
              <button
                onClick={() => handleStart(exam.id)}
                disabled={notYetOpen || closed}
                className="btn btn-primary"
                style={{ width: 'auto' }}
              >
                بدء الاختبار
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExamList;