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

//   if (error) return <div className="page"><div className="alert alert-error">{error}</div></div>;
//   if (!data) return <p style={{ textAlign: 'center', marginTop: 40 }}>Loading...</p>;

//   const graded = data.submissions.filter(s => s.status === 'graded');
//   const inProgress = data.submissions.filter(s => s.status === 'in_progress');
//   const avgScore = graded.length
//     ? (graded.reduce((sum, s) => sum + s.score, 0) / graded.length).toFixed(1)
//     : 0;

//   return (
//     <div className="page">
//       <h2>Results: {data.exam.title}</h2>

//       <div className="stats-row">
//         <div className="stat-box">
//           <div className="stat-value">{graded.length}</div>
//           <div className="stat-label">Completed</div>
//         </div>
//         <div className="stat-box">
//           <div className="stat-value">{inProgress.length}</div>
//           <div className="stat-label">In Progress</div>
//         </div>
//         <div className="stat-box">
//           <div className="stat-value">{avgScore}</div>
//           <div className="stat-label">Avg Score</div>
//         </div>
//       </div>

//       <div className="card">
//         <table>
//           <thead>
//             <tr>
//               <th>Student</th>
//               <th>Email</th>
//               <th>Score</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.submissions.map(sub => (
//               <tr key={sub.id}>
//                 <td>{sub.student?.name}</td>
//                 <td>{sub.student?.email}</td>
//                 <td>{sub.status === 'graded' ? sub.score : '—'}</td>
//                 <td>
//                   <span className={`status-tag ${sub.status}`}>{sub.status}</span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Link to="/teacher/exams" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block' }}>
//         Back to My Exams
//       </Link>
//     </div>
//   );
// };

// export default ExamResults;
/////////////////////////////////////////////////

// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import api from '../../api/axios';

// const statusLabels = {
//   graded: 'مكتمل',
//   in_progress: 'قيد التنفيذ'
// };

// const ExamResults = () => {
//   const { examId } = useParams();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api.get(`/exams/${examId}/results`)
//       .then(res => setData(res.data))
//       .catch(err => setError(err.response?.data?.message || 'فشل تحميل النتائج'));
//   }, [examId]);

//   if (error) return <div className="page" dir="rtl" style={{ textAlign: 'right' }}><div className="alert alert-error">{error}</div></div>;
//   if (!data) return <p style={{ textAlign: 'center', marginTop: 40 }}>جاري التحميل...</p>;

//   const graded = data.submissions.filter(s => s.status === 'graded');
//   const inProgress = data.submissions.filter(s => s.status === 'in_progress');
//   const avgScore = graded.length
//     ? (graded.reduce((sum, s) => sum + s.score, 0) / graded.length).toFixed(1)
//     : 0;

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <h2>نتائج: {data.exam.title}</h2>

//       <div className="stats-row">
//         <div className="stat-box">
//           <div className="stat-value">{graded.length}</div>
//           <div className="stat-label">مكتمل</div>
//         </div>
//         <div className="stat-box">
//           <div className="stat-value">{inProgress.length}</div>
//           <div className="stat-label">قيد التنفيذ</div>
//         </div>
//         <div className="stat-box">
//           <div className="stat-value">{avgScore}</div>
//           <div className="stat-label">متوسط الدرجات</div>
//         </div>
//       </div>

//       <div className="card">
//         <table>
//           <thead>
//             <tr>
//               <th>الطالب</th>
//               <th>البريد الإلكتروني</th>
//               <th>الدرجة</th>
//               <th>الحالة</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.submissions.map(sub => (
//               <tr key={sub.id}>
//                 <td>{sub.student?.name}</td>
//                 <td>{sub.student?.email}</td>
//                 <td>{sub.status === 'graded' ? sub.score : '—'}</td>
//                 <td>
//                   <span className={`status-tag ${sub.status}`}>{statusLabels[sub.status] || sub.status}</span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Link to="/teacher/exams" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block' }}>
//         الرجوع إلى اختباراتي
//       </Link>
//     </div>
//   );
// };

// export default ExamResults;

//////////////////////////////////////////////////////

// import { useState, useEffect, useRef } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import html2pdf from 'html2pdf.js';
// import api from '../../api/axios';

// const statusLabels = {
//   graded: 'مكتمل',
//   in_progress: 'قيد التنفيذ'
// };

// const ExamResults = () => {
//   const { examId } = useParams();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState('');
//   const [exporting, setExporting] = useState(false);
//   const printRef = useRef(null);

//   useEffect(() => {
//     api.get(`/exams/${examId}/results`)
//       .then(res => setData(res.data))
//       .catch(err => setError(err.response?.data?.message || 'فشل تحميل النتائج'));
//   }, [examId]);

//   const handleExportPDF = () => {
//     if (!printRef.current || !data) return;
//     setExporting(true);

//     const opt = {
//       margin: 10,
//       filename: `نتائج-${data.exam.title}.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf()
//       .set(opt)
//       .from(printRef.current)
//       .save()
//       .finally(() => setExporting(false));
//   };

//   if (error) return <div className="page" dir="rtl" style={{ textAlign: 'right' }}><div className="alert alert-error">{error}</div></div>;
//   if (!data) return <p style={{ textAlign: 'center', marginTop: 40 }}>جاري التحميل...</p>;

//   const graded = data.submissions.filter(s => s.status === 'graded');
//   const inProgress = data.submissions.filter(s => s.status === 'in_progress');
//   const avgScore = graded.length
//     ? (graded.reduce((sum, s) => sum + s.score, 0) / graded.length).toFixed(1)
//     : 0;

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
//         <h2 style={{ margin: 0 }}>نتائج: {data.exam.title}</h2>
//         <button
//           onClick={handleExportPDF}
//           disabled={exporting}
//           className="btn btn-secondary"
//           style={{ width: 'auto' }}
//         >
//           {exporting ? 'جاري التصدير...' : 'تصدير كملف PDF'}
//         </button>
//       </div>

//       <div ref={printRef} style={{ backgroundColor: 'white', padding: 10 }}>
//         <h3 style={{ marginBottom: 4 }}>نتائج: {data.exam.title}</h3>

//         <div className="stats-row">
//           <div className="stat-box">
//             <div className="stat-value">{graded.length}</div>
//             <div className="stat-label">مكتمل</div>
//           </div>
//           <div className="stat-box">
//             <div className="stat-value">{inProgress.length}</div>
//             <div className="stat-label">قيد التنفيذ</div>
//           </div>
//           <div className="stat-box">
//             <div className="stat-value">{avgScore}</div>
//             <div className="stat-label">متوسط الدرجات</div>
//           </div>
//         </div>

//         <div className="card">
//           <table>
//             <thead>
//               <tr>
//                 <th>الطالب</th>
//                 <th>البريد الإلكتروني</th>
//                 <th>الدرجة</th>
//                 <th>الحالة</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.submissions.map(sub => (
//                 <tr key={sub.id}>
//                   <td>{sub.student?.name}</td>
//                   <td>{sub.student?.email}</td>
//                   <td>{sub.status === 'graded' ? sub.score : '—'}</td>
//                   <td>
//                     <span className={`status-tag ${sub.status}`}>{statusLabels[sub.status] || sub.status}</span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <Link to="/teacher/exams" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 16 }}>
//         الرجوع إلى اختباراتي
//       </Link>
//     </div>
//   );
// };

// export default ExamResults;

// ////////////////////////////////////////
// import { useState, useEffect, useRef } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import html2pdf from 'html2pdf.js';
// import api from '../../api/axios';

// const statusLabels = {
//   graded: 'مكتمل',
//   in_progress: 'قيد التنفيذ'
// };

// const ExamResults = () => {
//   const { examId } = useParams();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState('');
//   const [exporting, setExporting] = useState(false);
//   const printRef = useRef(null);

//   useEffect(() => {
//     api.get(`/exams/${examId}/results`)
//       .then(res => setData(res.data))
//       .catch(err => setError(err.response?.data?.message || 'فشل تحميل النتائج'));
//   }, [examId]);

//   const handleExportPDF = () => {
//     if (!printRef.current || !data) return;
//     setExporting(true);

//     const opt = {
//       margin: 10,
//       filename: `نتائج-${data.exam.title}.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf()
//       .set(opt)
//       .from(printRef.current)
//       .save()
//       .finally(() => setExporting(false));
//   };

//   if (error) return <div className="page" dir="rtl" style={{ textAlign: 'right' }}><div className="alert alert-error">{error}</div></div>;
//   if (!data) return <p style={{ textAlign: 'center', marginTop: 40 }}>جاري التحميل...</p>;

//   const graded = data.submissions.filter(s => s.status === 'graded');
//   const inProgress = data.submissions.filter(s => s.status === 'in_progress');
//   const avgScore = graded.length
//     ? (graded.reduce((sum, s) => sum + s.score, 0) / graded.length).toFixed(1)
//     : 0;

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
//         <h2 style={{ margin: 0 }}>نتائج: {data.exam.title}</h2>
//         <button
//           onClick={handleExportPDF}
//           disabled={exporting}
//           className="btn btn-secondary"
//           style={{ width: 'auto' }}
//         >
//           {exporting ? 'جاري التصدير...' : 'تصدير كملف PDF'}
//         </button>
//       </div>

//       <div className="stats-row">
//         <div className="stat-box">
//           <div className="stat-value">{graded.length}</div>
//           <div className="stat-label">مكتمل</div>
//         </div>
//         <div className="stat-box">
//           <div className="stat-value">{inProgress.length}</div>
//           <div className="stat-label">قيد التنفيذ</div>
//         </div>
//         <div className="stat-box">
//           <div className="stat-value">{avgScore}</div>
//           <div className="stat-label">متوسط الدرجات</div>
//         </div>
//       </div>

//       <div className="card">
//         <table>
//           <thead>
//             <tr>
//               <th>الطالب</th>
//               <th>البريد الإلكتروني</th>
//               <th>الدرجة</th>
//               <th>الحالة</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.submissions.map(sub => (
//               <tr key={sub.id}>
//                 <td>{sub.student?.name}</td>
//                 <td>{sub.student?.email}</td>
//                 <td>{sub.status === 'graded' ? sub.score : '—'}</td>
//                 <td>
//                   <span className={`status-tag ${sub.status}`}>{statusLabels[sub.status] || sub.status}</span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Hidden simplified table used ONLY for PDF export - name, email, grade only */}
//       <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
//         <div ref={printRef} style={{ backgroundColor: 'white', padding: 10, width: 600 }}>
//           <h3 style={{ marginBottom: 12, textAlign: 'right' }}>نتائج: {data.exam.title}</h3>
//           <table style={{ width: '100%', borderCollapse: 'collapse', direction: 'rtl' }}>
//             <thead>
//               <tr>
//                 <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'right' }}>الطالب</th>
//                 <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'right' }}>البريد الإلكتروني</th>
//                 <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'right' }}>الدرجة</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.submissions.map(sub => (
//                 <tr key={sub.id}>
//                   <td style={{ border: '1px solid #ccc', padding: 8 }}>{sub.student?.name}</td>
//                   <td style={{ border: '1px solid #ccc', padding: 8 }}>{sub.student?.email}</td>
//                   <td style={{ border: '1px solid #ccc', padding: 8 }}>{sub.status === 'graded' ? sub.score : '—'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <Link to="/teacher/exams" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 16 }}>
//         الرجوع إلى اختباراتي
//       </Link>
//     </div>
//   );
// };

// export default ExamResults;

//////////////////////////////////////////////////

import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import api from "../../api/axios";

const statusLabels = {
  graded: "مكتمل",
  in_progress: "قيد التنفيذ",
};

const ExamResults = () => {
  const { examId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [exporting, setExporting] = useState(false);
  const printRef = useRef(null);

  useEffect(() => {
    api
      .get(`/exams/${examId}/results`)
      .then((res) => setData(res.data))
      .catch((err) =>
        setError(err.response?.data?.message || "فشل تحميل النتائج"),
      );
  }, [examId]);

  const handleExportPDF = () => {
    if (!printRef.current || !data) return;
    setExporting(true);

    const opt = {
      margin: 10,
      filename: `نتائج-${data.exam.title}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .set(opt)
      .from(printRef.current)
      .save()
      .finally(() => setExporting(false));
  };

  if (error)
    return (
      <div className="page" dir="rtl" style={{ textAlign: "right" }}>
        <div className="alert alert-error">{error}</div>
      </div>
    );
  if (!data)
    return (
      <p style={{ textAlign: "center", marginTop: 40 }}>جاري التحميل...</p>
    );

  const graded = data.submissions.filter((s) => s.status === "graded");
  const inProgress = data.submissions.filter((s) => s.status === "in_progress");
  const avgScore = graded.length
    ? (graded.reduce((sum, s) => sum + s.score, 0) / graded.length).toFixed(1)
    : 0;

  const totalPoints = data.exam.totalPoints || 0;
  const passingPercentage = data.exam.passingPercentage || 50;

  const getPassFail = (sub) => {
    if (sub.status !== "graded" || !totalPoints) return null;
    const percentage = (sub.score / totalPoints) * 100;
    return percentage >= passingPercentage;
  };

  return (
    <div className="page" dir="rtl" style={{ textAlign: "right" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <h2 style={{ margin: 0 }}>نتائج: {data.exam.title}</h2>
        <button
          onClick={handleExportPDF}
          disabled={exporting}
          className="btn btn-secondary"
          style={{ width: "auto" }}
        >
          {exporting ? "جاري التصدير..." : "تصدير كملف PDF"}
        </button>
      </div>

      <p className="subtitle">
        الدرجة الكلية: {totalPoints} | نسبة النجاح المطلوبة: {passingPercentage}
        %
      </p>

      <div className="stats-row">
        <div className="stat-box">
          <div className="stat-value">{graded.length}</div>
          <div className="stat-label">مكتمل</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{inProgress.length}</div>
          <div className="stat-label">قيد التنفيذ</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{avgScore}</div>
          <div className="stat-label">متوسط الدرجات</div>
        </div>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>الطالب</th>
              <th>البريد الإلكتروني</th>
              <th>الدرجة</th>
              <th>النتيجة</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {data.submissions.map((sub) => {
              const passed = getPassFail(sub);
              return (
                <tr key={sub.id}>
                  <td>{sub.student?.name}</td>
                  <td>{sub.student?.email}</td>
                  <td>
                    {sub.status === "graded"
                      ? `${sub.score} / ${totalPoints}`
                      : "—"}
                  </td>
                  <td>
                    {passed === null ? (
                      "—"
                    ) : (
                      <span
                        className={`badge ${passed ? "badge-published" : "badge-draft"}`}
                      >
                        {passed ? "ناجح" : "راسب"}
                      </span>
                    )}
                  </td>
                  <td>
                    <span className={`status-tag ${sub.status}`}>
                      {statusLabels[sub.status] || sub.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={printRef} style={{ backgroundColor: 'white', padding: 10, width: 600 }}>
          <h3 style={{ marginBottom: 12, textAlign: 'right' }}>نتائج: {data.exam.title}</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', direction: 'rtl' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'right' }}>الطالب</th>
                <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'right' }}>البريد الإلكتروني</th>
                <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'right' }}>الدرجة</th>
              </tr>
            </thead>
            <tbody>
              {data.submissions.map(sub => (
                <tr key={sub.id}>
                  <td style={{ border: '1px solid #ccc', padding: 8 }}>{sub.student?.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: 8 }}>{sub.student?.email}</td>
                  <td style={{ border: '1px solid #ccc', padding: 8 }}>{sub.status === 'graded' ? sub.score : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <div
          ref={printRef}
          style={{ backgroundColor: "white", padding: 10, width: 600 }}
        >
          <h3 style={{ marginBottom: 12, textAlign: "right" }}>
            نتائج: {data.exam.title}
          </h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              direction: "rtl",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "right",
                  }}
                >
                  الطالب
                </th>
                <th
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "right",
                  }}
                >
                  البريد الإلكتروني
                </th>
                <th
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "right",
                  }}
                >
                  الدرجة
                </th>
                <th
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "right",
                  }}
                >
                  النتيجة
                </th>
              </tr>
            </thead>
            <tbody>
              {data.submissions.map((sub) => {
                const passed = getPassFail(sub);
                return (
                  <tr key={sub.id}>
                    <td style={{ border: "1px solid #ccc", padding: 8 }}>
                      {sub.student?.name}
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: 8 }}>
                      {sub.student?.email}
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: 8 }}>
                      {sub.status === "graded" ? sub.score : "—"}
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: 8 }}>
                      {passed === null ? "—" : passed ? "ناجح" : "راسب"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Link
        to="/teacher/exams"
        className="btn btn-secondary"
        style={{ width: "auto", display: "inline-block", marginTop: 16 }}
      >
        الرجوع إلى اختباراتي
      </Link>
    </div>
  );
};

export default ExamResults;
