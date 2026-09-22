// import { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const TakeExam = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();

//   const [submissionId, setSubmissionId] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [secondsLeft, setSecondsLeft] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [finishing, setFinishing] = useState(false);
//   const timerRef = useRef(null);
//   const finishedRef = useRef(false);

//   useEffect(() => {
//     api.post(`/submissions/exams/${examId}/start`)
//       .then(res => {
//         const { submission, questions, durationMinutes } = res.data;
//         setSubmissionId(submission.id);
//         setQuestions(questions || []);   // <-- guard against undefined

//         const startedAt = new Date(submission.startedAt).getTime();
//         const totalSeconds = durationMinutes * 60;
//         const elapsed = Math.floor((Date.now() - startedAt) / 1000);
//         setSecondsLeft(Math.max(totalSeconds - elapsed, 0));
//       })
//       .catch(err => setError(err.response?.data?.message || 'Failed to start exam'))
//       .finally(() => setLoading(false));
//   }, [examId]);

//   const handleFinish = useCallback(async () => {
//     if (finishedRef.current || !submissionId) return;
//     finishedRef.current = true;
//     setFinishing(true);
//     try {
//       const res = await api.post(`/submissions/${submissionId}/finish`);
//       navigate('/student/results', { state: { score: res.data.score } });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to submit exam');
//       setFinishing(false);
//       finishedRef.current = false;
//     }
//   }, [submissionId, navigate]);

//   useEffect(() => {
//     if (secondsLeft === null) return;
//     if (secondsLeft <= 0) {
//       handleFinish();
//       return;
//     }
//     timerRef.current = setInterval(() => {
//       setSecondsLeft(prev => {
//         if (prev <= 1) {
//           clearInterval(timerRef.current);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timerRef.current);
//   }, [secondsLeft === null]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (secondsLeft === 0) handleFinish();
//   }, [secondsLeft, handleFinish]);

//   const handleSelect = async (questionId, optionId) => {
//     setAnswers(prev => ({ ...prev, [questionId]: optionId }));
//     try {
//       await api.post(`/submissions/${submissionId}/answer`, {
//         questionId,
//         selectedOptionId: optionId
//       });
//     } catch (err) {
//       setError('Failed to save answer — check your connection');
//     }
//   };

//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60).toString().padStart(2, '0');
//     const s = (secs % 60).toString().padStart(2, '0');
//     return `${m}:${s}`;
//   };

//   if (loading) return <p className="exam-loading">Loading exam...</p>;
//   if (error && (!questions || questions.length === 0)) {
//     return <p className="exam-error alert alert-error">{error}</p>;
//   }

//   const safeQuestions = questions || [];  // <-- guard used below
//   const answeredCount = Object.keys(answers).length;

//   return (
//     <div className="page">
//       <div className="exam-header">
//         <h2 style={{ margin: 0 }}>Exam in Progress</h2>
//         <div className={`timer ${secondsLeft < 60 ? 'low-time' : ''}`}>
//           {secondsLeft !== null ? formatTime(secondsLeft) : '--:--'}
//         </div>
//       </div>

//       <div className="exam-progress">
//         {answeredCount} of {safeQuestions.length} answered
//       </div>
//       <div className="progress-bar-track">
//         <div
//           className="progress-bar-fill"
//           style={{ width: `${safeQuestions.length ? (answeredCount / safeQuestions.length) * 100 : 0}%` }}
//         />
//       </div>

//       {error && <div className="alert alert-error">{error}</div>}

//       {safeQuestions.map((q, idx) => {
//         const isAnswered = answers[q.id] !== undefined;
//         return (
//           <div key={q.id} className={`question-card ${isAnswered ? 'answered' : 'unanswered'}`}>
//             <p className="question-text">
//               Q{idx + 1}. {q.questionText}{' '}
//               <span className="points-tag">({q.points} pt{q.points !== 1 ? 's' : ''})</span>
//             </p>
//             {(q.options || []).map(opt => (
//               <div
//                 key={opt.id}
//                 className={`answer-option ${answers[q.id] === opt.id ? 'selected' : ''}`}
//                 onClick={() => handleSelect(q.id, opt.id)}
//               >
//                 <input
//                   type="radio"
//                   name={`q-${q.id}`}
//                   checked={answers[q.id] === opt.id}
//                   onChange={() => handleSelect(q.id, opt.id)}
//                 />
//                 <label>{opt.optionText}</label>
//               </div>
//             ))}
//           </div>
//         );
//       })}

//       <button
//         onClick={handleFinish}
//         disabled={finishing}
//         className="btn btn-success"
//         style={{ width: '100%' }}
//       >
//         {finishing ? 'Submitting...' : 'Submit Exam'}
//       </button>
//     </div>
//   );
// };

// export default TakeExam;
////////////////////////////////////////////////////////////////////////

// import { useState, useEffect, useRef, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const TakeExam = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();

//   const [submissionId, setSubmissionId] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [secondsLeft, setSecondsLeft] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [finishing, setFinishing] = useState(false);
//   const timerRef = useRef(null);
//   const finishedRef = useRef(false);

//   // useEffect(() => {
//   //   api
//   //     .post(`/submissions/exams/${examId}/start`)
//   //     .then((res) => {
//   //       const { submission, questions, durationMinutes } = res.data;
//   //       setSubmissionId(submission.id);
//   //       setQuestions(questions || []);

//   //       const startedAt = new Date(submission.startedAt).getTime();
//   //       const totalSeconds = durationMinutes * 60;
//   //       const elapsed = Math.floor((Date.now() - startedAt) / 1000);
//   //       setSecondsLeft(Math.max(totalSeconds - elapsed, 0));
//   //     })
//   //     .catch((err) =>
//   //       setError(err.response?.data?.message || "Failed to start exam"),
//   //     )
//   //     .finally(() => setLoading(false));
//   // }, [examId]);

//   useEffect(() => {
//     const handlePageShow = (event) => {
//       if (event.persisted) {
//         // Page was restored from bfcache - force a clean reload to get fresh server state
//         window.location.reload();
//       }
//     };
//     window.addEventListener("pageshow", handlePageShow);
//     return () => window.removeEventListener("pageshow", handlePageShow);
//   }, []);

//   const hasStartedRef = useRef(false);

// useEffect(() => {
//   if (hasStartedRef.current) return;
//   hasStartedRef.current = true;

//   api.post(`/submissions/exams/${examId}/start`)
//     .then(res => {
//       const { submission, questions, durationMinutes } = res.data;
//       setSubmissionId(submission.id);
//       setQuestions(questions || []);

//       const startedAt = new Date(submission.startedAt).getTime();
//       const totalSeconds = durationMinutes * 60;
//       const elapsed = Math.floor((Date.now() - startedAt) / 1000);
//       setSecondsLeft(Math.max(totalSeconds - elapsed, 0));
//     })
//     .catch(err => {
//       if (err.response?.data?.alreadySubmitted) {
//         navigate('/student/results', { state: { score: err.response.data.score }, replace: true });
//         return;
//       }
//       setError(err.response?.data?.message || 'Failed to start exam');
//     })
//     .finally(() => setLoading(false));
// }, [examId, navigate]);
// const handleFinish = useCallback(async () => {
//   if (finishedRef.current || !submissionId) return;
//   finishedRef.current = true;
//   setFinishing(true);
//   try {
//     const res = await api.post(`/submissions/${submissionId}/finish`);
//     navigate('/student/results', { state: { score: res.data.score }, replace: true });
//   } catch (err) {
//     // Even on error (e.g. time already up), if backend returned a score, still show it
//     if (err.response?.data?.score !== undefined) {
//       navigate('/student/results', { state: { score: err.response.data.score }, replace: true });
//       return;
//     }
//     setError(err.response?.data?.message || 'Failed to submit exam');
//     setFinishing(false);
//     finishedRef.current = false;
//   }
// }, [submissionId, navigate]);

//   useEffect(() => {
//     if (secondsLeft === null) return;
//     if (secondsLeft <= 0) {
//       handleFinish();
//       return;
//     }
//     timerRef.current = setInterval(() => {
//       setSecondsLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timerRef.current);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timerRef.current);
//   }, [secondsLeft === null]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (secondsLeft === 0) handleFinish();
//   }, [secondsLeft, handleFinish]);

//   const handleSelect = async (questionId, optionId) => {
//     setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
//     try {
//       await api.post(`/submissions/${submissionId}/answer`, {
//         questionId,
//         selectedOptionId: optionId,
//       });
//     } catch (err) {
//       setError("Failed to save answer — check your connection");
//     }
//   };

//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60)
//       .toString()
//       .padStart(2, "0");
//     const s = (secs % 60).toString().padStart(2, "0");
//     return `${m}:${s}`;
//   };

//   if (loading) return <p className="exam-loading">Loading exam...</p>;
//   if (error && (!questions || questions.length === 0)) {
//     return <p className="exam-error alert alert-error">{error}</p>;
//   }

//   const safeQuestions = questions || [];
//   const answeredCount = Object.keys(answers).length;

//   // Base URL for images: strip the trailing /api from REACT_APP_API_URL
//   const mediaBaseUrl = (
//     process.env.REACT_APP_API_URL || "http://localhost:5000/api"
//   ).replace(/\/api\/?$/, "");

//   return (
//     <div className="page">
//       <div className="exam-header">
//         <h2 style={{ margin: 0 }}>Exam in Progress</h2>
//         <div className={`timer ${secondsLeft < 60 ? "low-time" : ""}`}>
//           {secondsLeft !== null ? formatTime(secondsLeft) : "--:--"}
//         </div>
//       </div>

//       <div className="exam-progress">
//         {answeredCount} of {safeQuestions.length} answered
//       </div>
//       <div className="progress-bar-track">
//         <div
//           className="progress-bar-fill"
//           style={{
//             width: `${safeQuestions.length ? (answeredCount / safeQuestions.length) * 100 : 0}%`,
//           }}
//         />
//       </div>

//       {error && <div className="alert alert-error">{error}</div>}

//       {safeQuestions.map((q, idx) => {
//         const isAnswered = answers[q.id] !== undefined;
//         return (
//           <div
//             key={q.id}
//             className={`question-card ${isAnswered ? "answered" : "unanswered"}`}
//           >
//             <p className="question-text">
//               Q{idx + 1}. {q.questionText}{" "}
//               <span className="points-tag">
//                 ({q.points} pt{q.points !== 1 ? "s" : ""})
//               </span>
//             </p>

//             {q.imageUrl && (
//               <img
//                 src={`${mediaBaseUrl}${q.imageUrl}`}
//                 alt={`Question ${idx + 1}`}
//                 style={{
//                   maxWidth: "100%",
//                   borderRadius: 8,
//                   marginBottom: 12,
//                   display: "block",
//                 }}
//               />
//             )}

//             {(q.options || []).map((opt) => (
//               <div
//                 key={opt.id}
//                 className={`answer-option ${answers[q.id] === opt.id ? "selected" : ""}`}
//                 onClick={() => handleSelect(q.id, opt.id)}
//               >
//                 <input
//                   type="radio"
//                   name={`q-${q.id}`}
//                   checked={answers[q.id] === opt.id}
//                   onChange={() => handleSelect(q.id, opt.id)}
//                 />
//                 <label>{opt.optionText}</label>
//               </div>
//             ))}
//           </div>
//         );
//       })}

//       <button
//         onClick={handleFinish}
//         disabled={finishing}
//         className="btn btn-success"
//         style={{ width: "100%" }}
//       >
//         {finishing ? "Submitting..." : "Submit Exam"}
//       </button>
//     </div>
//   );
// };

// export default TakeExam;
////////////////////////////////////////////////////////////

// import { useState, useEffect, useRef, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const TakeExam = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();

//   const [submissionId, setSubmissionId] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [secondsLeft, setSecondsLeft] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [finishing, setFinishing] = useState(false);
//   const timerRef = useRef(null);
//   const finishedRef = useRef(false);

//   useEffect(() => {
//     const handlePageShow = (event) => {
//       if (event.persisted) {
//         window.location.reload();
//       }
//     };
//     window.addEventListener("pageshow", handlePageShow);
//     return () => window.removeEventListener("pageshow", handlePageShow);
//   }, []);

//   const hasStartedRef = useRef(false);

//   useEffect(() => {
//     if (hasStartedRef.current) return;
//     hasStartedRef.current = true;

//     api.post(`/submissions/exams/${examId}/start`)
//       .then(res => {
//         const { submission, questions, durationMinutes } = res.data;
//         setSubmissionId(submission.id);
//         setQuestions(questions || []);

//         const startedAt = new Date(submission.startedAt).getTime();
//         const totalSeconds = durationMinutes * 60;
//         const elapsed = Math.floor((Date.now() - startedAt) / 1000);
//         setSecondsLeft(Math.max(totalSeconds - elapsed, 0));
//       })
//       .catch(err => {
//         if (err.response?.data?.alreadySubmitted) {
//           navigate('/student/results', { state: { score: err.response.data.score }, replace: true });
//           return;
//         }
//         setError(err.response?.data?.message || 'فشل بدء الاختبار');
//       })
//       .finally(() => setLoading(false));
//   }, [examId, navigate]);

//   const handleFinish = useCallback(async () => {
//     if (finishedRef.current || !submissionId) return;
//     finishedRef.current = true;
//     setFinishing(true);
//     try {
//       const res = await api.post(`/submissions/${submissionId}/finish`);
//       navigate('/student/results', { state: { score: res.data.score }, replace: true });
//     } catch (err) {
//       if (err.response?.data?.score !== undefined) {
//         navigate('/student/results', { state: { score: err.response.data.score }, replace: true });
//         return;
//       }
//       setError(err.response?.data?.message || 'فشل تسليم الاختبار');
//       setFinishing(false);
//       finishedRef.current = false;
//     }
//   }, [submissionId, navigate]);

//   useEffect(() => {
//     if (secondsLeft === null) return;
//     if (secondsLeft <= 0) {
//       handleFinish();
//       return;
//     }
//     timerRef.current = setInterval(() => {
//       setSecondsLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timerRef.current);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timerRef.current);
//   }, [secondsLeft === null]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (secondsLeft === 0) handleFinish();
//   }, [secondsLeft, handleFinish]);

//   const handleSelect = async (questionId, optionId) => {
//     setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
//     try {
//       await api.post(`/submissions/${submissionId}/answer`, {
//         questionId,
//         selectedOptionId: optionId,
//       });
//     } catch (err) {
//       setError("فشل حفظ الإجابة — تحقق من الاتصال");
//     }
//   };

//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60)
//       .toString()
//       .padStart(2, "0");
//     const s = (secs % 60).toString().padStart(2, "0");
//     return `${m}:${s}`;
//   };

//   if (loading) return <p className="exam-loading">جاري تحميل الاختبار...</p>;
//   if (error && (!questions || questions.length === 0)) {
//     return <p className="exam-error alert alert-error">{error}</p>;
//   }

//   const safeQuestions = questions || [];
//   const answeredCount = Object.keys(answers).length;

//   const mediaBaseUrl = (
//     process.env.REACT_APP_API_URL || "http://localhost:5000/api"
//   ).replace(/\/api\/?$/, "");

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <div className="exam-header">
//         <h2 style={{ margin: 0 }}>الاختبار جارٍ</h2>
//         <div className={`timer ${secondsLeft < 60 ? "low-time" : ""}`}>
//           {secondsLeft !== null ? formatTime(secondsLeft) : "--:--"}
//         </div>
//       </div>

//       <div className="exam-progress">
//         تمت الإجابة على {answeredCount} من {safeQuestions.length}
//       </div>
//       <div className="progress-bar-track">
//         <div
//           className="progress-bar-fill"
//           style={{
//             width: `${safeQuestions.length ? (answeredCount / safeQuestions.length) * 100 : 0}%`,
//           }}
//         />
//       </div>

//       {error && <div className="alert alert-error">{error}</div>}

//       {safeQuestions.map((q, idx) => {
//         const isAnswered = answers[q.id] !== undefined;
//         return (
//           <div
//             key={q.id}
//             className={`question-card ${isAnswered ? "answered" : "unanswered"}`}
//           >
//             <p className="question-text">
//               السؤال {idx + 1}. {q.questionText}{" "}
//               <span className="points-tag">
//                 ({q.points} نقطة)
//               </span>
//             </p>

//             {q.imageUrl && (
//               <img
//                 src={`${mediaBaseUrl}${q.imageUrl}`}
//                 alt={`السؤال ${idx + 1}`}
//                 style={{
//                   maxWidth: "100%",
//                   borderRadius: 8,
//                   marginBottom: 12,
//                   display: "block",
//                 }}
//               />
//             )}

//             {(q.options || []).map((opt) => (
//               <div
//                 key={opt.id}
//                 className={`answer-option ${answers[q.id] === opt.id ? "selected" : ""}`}
//                 onClick={() => handleSelect(q.id, opt.id)}
//               >
//                 <input
//                   type="radio"
//                   name={`q-${q.id}`}
//                   checked={answers[q.id] === opt.id}
//                   onChange={() => handleSelect(q.id, opt.id)}
//                 />
//                 <label>{opt.optionText}</label>
//               </div>
//             ))}
//           </div>
//         );
//       })}

//       <button
//         onClick={handleFinish}
//         disabled={finishing}
//         className="btn btn-success"
//         style={{ width: "100%" }}
//       >
//         {finishing ? "جاري التسليم..." : "تسليم الاختبار"}
//       </button>
//     </div>
//   );
// };

// export default TakeExam;
////////////////////////////////////////////////////////
// import { useState, useEffect, useRef, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const TakeExam = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();

//   const [submissionId, setSubmissionId] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [secondsLeft, setSecondsLeft] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [finishing, setFinishing] = useState(false);
//   const timerRef = useRef(null);
//   const finishedRef = useRef(false);

//   useEffect(() => {
//     const handlePageShow = (event) => {
//       if (event.persisted) {
//         window.location.reload();
//       }
//     };
//     window.addEventListener("pageshow", handlePageShow);
//     return () => window.removeEventListener("pageshow", handlePageShow);
//   }, []);

//   const hasStartedRef = useRef(false);

//   useEffect(() => {
//     if (hasStartedRef.current) return;
//     hasStartedRef.current = true;

//     api
//       .post(`/submissions/exams/${examId}/start`)
//       .then((res) => {
//         const { submission, questions, durationMinutes } = res.data;
//         setSubmissionId(submission.id);
//         setQuestions(questions || []);

//         const startedAt = new Date(submission.startedAt).getTime();
//         const totalSeconds = durationMinutes * 60;
//         const elapsed = Math.floor((Date.now() - startedAt) / 1000);
//         setSecondsLeft(Math.max(totalSeconds - elapsed, 0));
//       })
//       .catch((err) => {
//         if (err.response?.data?.alreadySubmitted) {
//           navigate("/student/results", {
//             state: { score: err.response.data.score },
//             replace: true,
//           });
//           return;
//         }
//         setError(err.response?.data?.message || "فشل بدء الاختبار");
//       })
//       .finally(() => setLoading(false));
//   }, [examId, navigate]);

//   const handleFinish = useCallback(async () => {
//     if (finishedRef.current || !submissionId) return;
//     finishedRef.current = true;
//     setFinishing(true);
//     try {
//       const res = await api.post(`/submissions/${submissionId}/finish`);
//       navigate("/student/results", {
//         state: { score: res.data.score },
//         replace: true,
//       });
//     } catch (err) {
//       if (err.response?.data?.score !== undefined) {
//         navigate("/student/results", {
//           state: { score: err.response.data.score },
//           replace: true,
//         });
//         return;
//       }
//       setError(err.response?.data?.message || "فشل تسليم الاختبار");
//       setFinishing(false);
//       finishedRef.current = false;
//     }
//   }, [submissionId, navigate]);

//   useEffect(() => {
//     if (secondsLeft === null) return;
//     if (secondsLeft <= 0) {
//       handleFinish();
//       return;
//     }
//     timerRef.current = setInterval(() => {
//       setSecondsLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timerRef.current);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timerRef.current);
//   }, [secondsLeft === null]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (secondsLeft === 0) handleFinish();
//   }, [secondsLeft, handleFinish]);

//   const handleSelect = async (questionId, optionId) => {
//     setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
//     try {
//       await api.post(`/submissions/${submissionId}/answer`, {
//         questionId,
//         selectedOptionId: optionId,
//       });
//     } catch (err) {
//       setError("فشل حفظ الإجابة — تحقق من الاتصال");
//     }
//   };

//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60)
//       .toString()
//       .padStart(2, "0");
//     const s = (secs % 60).toString().padStart(2, "0");
//     return `${m}:${s}`;
//   };

//   if (loading) return <p className="exam-loading">جاري تحميل الاختبار...</p>;
//   if (error && (!questions || questions.length === 0)) {
//     return <p className="exam-error alert alert-error">{error}</p>;
//   }

//   const safeQuestions = questions || [];
//   const answeredCount = Object.keys(answers).length;

//   const mediaBaseUrl = (
//     process.env.REACT_APP_API_URL || "http://localhost:5000/api"
//   ).replace(/\/api\/?$/, "");

//   return (
//     <div className="page">
//       <div className="exam-header">
//         <h2 style={{ margin: 0 }}>الاختبار جارٍ</h2>
//         <div className={`timer ${secondsLeft < 60 ? "low-time" : ""}`}>
//           {secondsLeft !== null ? formatTime(secondsLeft) : "--:--"}
//         </div>
//       </div>

//       <div className="exam-progress">
//         تمت الإجابة على {answeredCount} من {safeQuestions.length}
//       </div>
//       <div className="progress-bar-track">
//         <div
//           className="progress-bar-fill"
//           style={{
//             width: `${safeQuestions.length ? (answeredCount / safeQuestions.length) * 100 : 0}%`,
//           }}
//         />
//       </div>

//       {error && <div className="alert alert-error">{error}</div>}

//       {safeQuestions.map((q, idx) => {
//         const isAnswered = answers[q.id] !== undefined;
//         return (
//           <div
//             key={q.id}
//             className={`question-card ${isAnswered ? "answered" : "unanswered"}`}
//           >
//             <p className="question-text">
//               السؤال {idx + 1}. {q.questionText}{" "}
//               <span className="points-tag">({q.points} نقطة)</span>
//             </p>

//             {q.imageUrl && (
//               <img
//                 src={`${mediaBaseUrl}${q.imageUrl}`}
//                 alt={`السؤال ${idx + 1}`}
//                 loading="lazy"
//                 style={{
//                   maxWidth: "100%",
//                   borderRadius: 8,
//                   marginBottom: 12,
//                   display: "block",
//                 }}
//               />
//             )}

//             {(q.options || []).map((opt) => (
//               <div
//                 key={opt.id}
//                 className={`answer-option ${answers[q.id] === opt.id ? "selected" : ""}`}
//                 onClick={() => handleSelect(q.id, opt.id)}
//               >
//                 <input
//                   type="radio"
//                   name={`q-${q.id}`}
//                   checked={answers[q.id] === opt.id}
//                   onChange={() => handleSelect(q.id, opt.id)}
//                 />
//                 <label>{opt.optionText}</label>
//               </div>
//             ))}
//           </div>
//         );
//       })}

//       <button
//         onClick={handleFinish}
//         disabled={finishing}
//         className="btn btn-success"
//         style={{ width: "100%" }}
//       >
//         {finishing ? "جاري التسليم..." : "تسليم الاختبار"}
//       </button>
//     </div>
//   );
// };

// export default TakeExam;
////////////////////////////////////////////////////////////////////


import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const TakeExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();

  const [submissionId, setSubmissionId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [finishing, setFinishing] = useState(false);
  const timerRef = useRef(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    api
      .post(`/submissions/exams/${examId}/start`)
      .then((res) => {
        const { submission, questions, durationMinutes } = res.data;
        setSubmissionId(submission.id);
        setQuestions(questions || []);

        const startedAt = new Date(submission.startedAt).getTime();
        const totalSeconds = durationMinutes * 60;
        const elapsed = Math.floor((Date.now() - startedAt) / 1000);
        setSecondsLeft(Math.max(totalSeconds - elapsed, 0));
      })
      .catch((err) => {
        if (err.response?.data?.alreadySubmitted) {
          navigate("/student/results", {
            state: { score: err.response.data.score },
            replace: true,
          });
          return;
        }
        setError(err.response?.data?.message || "فشل بدء الاختبار");
      })
      .finally(() => setLoading(false));
  }, [examId, navigate]);

  const handleFinish = useCallback(async () => {
    if (finishedRef.current || !submissionId) return;
    finishedRef.current = true;
    setFinishing(true);
    try {
      const res = await api.post(`/submissions/${submissionId}/finish`);
      navigate("/student/results", {
        state: { score: res.data.score },
        replace: true,
      });
    } catch (err) {
      if (err.response?.data?.score !== undefined) {
        navigate("/student/results", {
          state: { score: err.response.data.score },
          replace: true,
        });
        return;
      }
      setError(err.response?.data?.message || "فشل تسليم الاختبار");
      setFinishing(false);
      finishedRef.current = false;
    }
  }, [submissionId, navigate]);

  useEffect(() => {
    if (secondsLeft === null) return;
    if (secondsLeft <= 0) {
      handleFinish();
      return;
    }
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [secondsLeft === null]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (secondsLeft === 0) handleFinish();
  }, [secondsLeft, handleFinish]);

  const handleSelect = async (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    try {
      await api.post(`/submissions/${submissionId}/answer`, {
        questionId,
        selectedOptionId: optionId,
      });
    } catch (err) {
      setError("فشل حفظ الإجابة — تحقق من الاتصال");
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (loading) {
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">جاري تحميل الاختبار...</p>
      </div>
    );
  }

  if (error && (!questions || questions.length === 0)) {
    return (
      <div dir="rtl" className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="max-w-md mx-auto bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 border border-red-100">
          {error}
        </div>
      </div>
    );
  }

  const safeQuestions = questions || [];
  const answeredCount = Object.keys(answers).length;
  const progressPercent = safeQuestions.length ? (answeredCount / safeQuestions.length) * 100 : 0;

  const mediaBaseUrl = (
    process.env.REACT_APP_API_URL || "http://localhost:5000/api"
  ).replace(/\/api\/?$/, "");

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 pb-24">
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-4 py-4 sm:px-6 flex items-center justify-between gap-4">
          <h2 className="font-bold text-slate-900 text-base sm:text-lg">الاختبار جارٍ</h2>
          <div
            className={`text-lg sm:text-xl font-bold px-3 py-1 rounded-lg ${
              secondsLeft < 60 ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-700"
            }`}
          >
            {secondsLeft !== null ? formatTime(secondsLeft) : "--:--"}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 mb-2">
          تمت الإجابة على {answeredCount} من {safeQuestions.length}
        </p>
        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-indigo-600 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {safeQuestions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            return (
              <div
                key={q.id}
                dir="ltr"
                className={`bg-white rounded-xl border p-5 text-left ${
                  isAnswered ? "border-green-200" : "border-slate-200"
                }`}
              >
                <p className="font-medium text-slate-900 mb-3">
                  {idx + 1}. {q.questionText}{" "}
                  <span className="text-sm font-normal text-slate-400">({q.points} pts)</span>
                </p>

                {q.imageUrl && (
                  <img
                    src={`${mediaBaseUrl}${q.imageUrl}`}
                    alt={`Question ${idx + 1}`}
                    loading="lazy"
                    className="max-w-full rounded-lg mb-3 block"
                  />
                )}

                <div className="space-y-2">
                  {(q.options || []).map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-pointer transition-colors ${
                        answers[q.id] === opt.id
                          ? "border-indigo-400 bg-indigo-50"
                          : "border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        checked={answers[q.id] === opt.id}
                        onChange={() => handleSelect(q.id, opt.id)}
                        className="shrink-0"
                      />
                      <label className="text-sm text-slate-800 cursor-pointer">{opt.optionText}</label>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleFinish}
            disabled={finishing}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
          >
            {finishing ? "جاري التسليم..." : "تسليم الاختبار"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeExam;