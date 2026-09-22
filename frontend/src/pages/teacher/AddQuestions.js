// // import { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import api from '../../api/axios';

// // const emptyQuestion = () => ({
// //   questionText: '',
// //   points: 1,
// //   options: [
// //     { optionText: '', isCorrect: false },
// //     { optionText: '', isCorrect: false }
// //   ]
// // });

// // const AddQuestions = () => {
// //   const { examId } = useParams();
// //   const navigate = useNavigate();
// //   const [question, setQuestion] = useState(emptyQuestion());
// //   const [savedCount, setSavedCount] = useState(0);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleOptionChange = (index, field, value) => {
// //     const updated = [...question.options];
// //     if (field === 'isCorrect') {
// //       // Single-correct-answer style: only one option can be correct
// //       updated.forEach((opt, i) => (opt.isCorrect = i === index));
// //     } else {
// //       updated[index][field] = value;
// //     }
// //     setQuestion({ ...question, options: updated });
// //   };

// //   const addOption = () => {
// //     if (question.options.length >= 6) return;
// //     setQuestion({ ...question, options: [...question.options, { optionText: '', isCorrect: false }] });
// //   };

// //   const removeOption = (index) => {
// //     if (question.options.length <= 2) return;
// //     setQuestion({ ...question, options: question.options.filter((_, i) => i !== index) });
// //   };

// //   const handleSaveQuestion = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     if (!question.options.some(o => o.isCorrect)) {
// //       setError('Please mark one option as correct');
// //       return;
// //     }
// //     if (question.options.some(o => !o.optionText.trim())) {
// //       setError('All options must have text');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       await api.post(`/exams/${examId}/questions`, question);
// //       setSavedCount(savedCount + 1);
// //       setQuestion(emptyQuestion());
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to save question');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handlePublish = async () => {
// //     setError('');
// //     try {
// //       await api.patch(`/exams/${examId}/publish`);
// //       navigate('/teacher');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to publish exam');
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
// //       <h2>Add Questions</h2>
// //       <p>{savedCount} question(s) added so far.</p>
// //       {error && <p style={{ color: 'red' }}>{error}</p>}

// //       <form onSubmit={handleSaveQuestion} style={{ border: '1px solid #ccc', padding: 20, borderRadius: 8, marginBottom: 20 }}>
// //         <div style={{ marginBottom: 12 }}>
// //           <label>Question Text</label><br />
// //           <textarea
// //             value={question.questionText}
// //             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
// //             required
// //             style={{ width: '100%', padding: 8 }}
// //           />
// //         </div>

// //         <div style={{ marginBottom: 12 }}>
// //           <label>Points</label><br />
// //           <input
// //             type="number"
// //             min="1"
// //             value={question.points}
// //             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
// //             style={{ width: 100, padding: 8 }}
// //           />
// //         </div>

// //         <label>Options (select the correct one):</label>
// //         {question.options.map((opt, i) => (
// //           <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
// //             <input
// //               type="radio"
// //               name="correctOption"
// //               checked={opt.isCorrect}
// //               onChange={() => handleOptionChange(i, 'isCorrect', true)}
// //             />
// //             <input
// //               type="text"
// //               value={opt.optionText}
// //               onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
// //               placeholder={`Option ${i + 1}`}
// //               required
// //               style={{ flex: 1, padding: 8 }}
// //             />
// //             {question.options.length > 2 && (
// //               <button type="button" onClick={() => removeOption(i)}>✕</button>
// //             )}
// //           </div>
// //         ))}

// //         <button type="button" onClick={addOption} disabled={question.options.length >= 6} style={{ marginBottom: 16 }}>
// //           + Add Option
// //         </button>
// //         <br />
// //         <button type="submit" disabled={loading} style={{ padding: 10, width: '100%' }}>
// //           {loading ? 'Saving...' : 'Save Question & Add Another'}
// //         </button>
// //       </form>

// //       <button
// //         onClick={handlePublish}
// //         disabled={savedCount === 0}
// //         style={{ padding: 10, width: '100%', background: '#2e7d32', color: 'white', border: 'none' }}
// //       >
// //         Publish Exam ({savedCount} question{savedCount !== 1 ? 's' : ''})
// //       </button>
// //     </div>
// //   );
// // };

// // export default AddQuestions;

// ////////////////////////////////////////////////////////////////
// // import { useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import api from '../../api/axios';

// // const emptyQuestion = () => ({
// //   questionText: '',
// //   points: 1,
// //   options: [
// //     { optionText: '', isCorrect: false },
// //     { optionText: '', isCorrect: false }
// //   ]
// // });

// // const AddQuestions = () => {
// //   const { examId } = useParams();
// //   const navigate = useNavigate();
// //   const [question, setQuestion] = useState(emptyQuestion());
// //   const [savedCount, setSavedCount] = useState(0);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleOptionChange = (index, field, value) => {
// //     const updated = [...question.options];
// //     if (field === 'isCorrect') {
// //       updated.forEach((opt, i) => (opt.isCorrect = i === index));
// //     } else {
// //       updated[index][field] = value;
// //     }
// //     setQuestion({ ...question, options: updated });
// //   };

// //   const addOption = () => {
// //     if (question.options.length >= 6) return;
// //     setQuestion({ ...question, options: [...question.options, { optionText: '', isCorrect: false }] });
// //   };

// //   const removeOption = (index) => {
// //     if (question.options.length <= 2) return;
// //     setQuestion({ ...question, options: question.options.filter((_, i) => i !== index) });
// //   };

// //   const handleSaveQuestion = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     if (!question.options.some(o => o.isCorrect)) {
// //       setError('Please mark one option as correct');
// //       return;
// //     }
// //     if (question.options.some(o => !o.optionText.trim())) {
// //       setError('All options must have text');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       await api.post(`/exams/${examId}/questions`, question);
// //       setSavedCount(savedCount + 1);
// //       setQuestion(emptyQuestion());
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to save question');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handlePublish = async () => {
// //     setError('');
// //     try {
// //       await api.patch(`/exams/${examId}/publish`);
// //       navigate('/teacher');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to publish exam');
// //     }
// //   };

// //   return (
// //     <div className="page">
// //       <h2>Add Questions</h2>
// //       <span className="progress-pill">{savedCount} question{savedCount !== 1 ? 's' : ''} added</span>

// //       {error && <div className="alert alert-error">{error}</div>}

// //       <form onSubmit={handleSaveQuestion} className="question-form">
// //         <div className="form-group">
// //           <label>Question Text</label>
// //           <textarea
// //             rows={3}
// //             value={question.questionText}
// //             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
// //             required
// //           />
// //         </div>

// //         <div className="form-group" style={{ maxWidth: 120 }}>
// //           <label>Points</label>
// //           <input
// //             type="number"
// //             min="1"
// //             value={question.points}
// //             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
// //           />
// //         </div>

// //         <hr className="divider" />

// //         <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
// //           Options — select the correct one
// //         </label>

// //         <div style={{ marginTop: 10 }}>
// //           {question.options.map((opt, i) => (
// //             <div key={i} className={`option-row ${opt.isCorrect ? 'correct' : ''}`}>
// //               <input
// //                 type="radio"
// //                 name="correctOption"
// //                 checked={opt.isCorrect}
// //                 onChange={() => handleOptionChange(i, 'isCorrect', true)}
// //               />
// //               <input
// //                 type="text"
// //                 value={opt.optionText}
// //                 onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
// //                 placeholder={`Option ${i + 1}`}
// //                 required
// //                 style={{ flex: 1 }}
// //               />
// //               {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>✓ Correct</span>}
// //               {question.options.length > 2 && (
// //                 <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
// //               )}
// //             </div>
// //           ))}
// //         </div>

// //         <div className="btn-row" style={{ marginTop: 14 }}>
// //           <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
// //             + Add Option
// //           </button>
// //         </div>

// //         <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
// //           {loading ? 'Saving...' : 'Save Question & Add Another'}
// //         </button>
// //       </form>

// //       <div className="publish-bar">
// //         <button
// //           onClick={handlePublish}
// //           disabled={savedCount === 0}
// //           className="btn btn-success"
// //           style={{ width: '100%' }}
// //         >
// //           Publish Exam ({savedCount} question{savedCount !== 1 ? 's' : ''})
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddQuestions;

// ////////////////////////////////////////////////
// // import { useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import api from '../../api/axios';

// // const emptyQuestion = () => ({
// //   questionText: '',
// //   points: 1,
// //   image: null,
// //   imagePreview: null,
// //   options: [
// //     { optionText: '', isCorrect: false },
// //     { optionText: '', isCorrect: false }
// //   ]
// // });

// // const AddQuestions = () => {
// //   const { examId } = useParams();
// //   const navigate = useNavigate();
// //   const [question, setQuestion] = useState(emptyQuestion());
// //   const [savedCount, setSavedCount] = useState(0);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleOptionChange = (index, field, value) => {
// //     const updated = [...question.options];
// //     if (field === 'isCorrect') {
// //       updated.forEach((opt, i) => (opt.isCorrect = i === index));
// //     } else {
// //       updated[index][field] = value;
// //     }
// //     setQuestion({ ...question, options: updated });
// //   };

// //   const addOption = () => {
// //     if (question.options.length >= 6) return;
// //     setQuestion({ ...question, options: [...question.options, { optionText: '', isCorrect: false }] });
// //   };

// //   const removeOption = (index) => {
// //     if (question.options.length <= 2) return;
// //     setQuestion({ ...question, options: question.options.filter((_, i) => i !== index) });
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;
// //     setQuestion({ ...question, image: file, imagePreview: URL.createObjectURL(file) });
// //   };

// //   const removeImage = () => {
// //     setQuestion({ ...question, image: null, imagePreview: null });
// //   };

// //   const handleSaveQuestion = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     if (!question.options.some(o => o.isCorrect)) {
// //       setError('Please mark one option as correct');
// //       return;
// //     }
// //     if (question.options.some(o => !o.optionText.trim())) {
// //       setError('All options must have text');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const formData = new FormData();
// //       formData.append('questionText', question.questionText);
// //       formData.append('points', question.points);
// //       formData.append('options', JSON.stringify(question.options));
// //       if (question.image) {
// //         formData.append('image', question.image);
// //       }

// //       await api.post(`/exams/${examId}/questions`, formData, {
// //         headers: { 'Content-Type': 'multipart/form-data' }
// //       });
// //       setSavedCount(savedCount + 1);
// //       setQuestion(emptyQuestion());
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to save question');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handlePublish = async () => {
// //     setError('');
// //     try {
// //       await api.patch(`/exams/${examId}/publish`);
// //       navigate('/teacher');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to publish exam');
// //     }
// //   };

// //   return (
// //     <div className="page">
// //       <h2>Add Questions</h2>
// //       <span className="progress-pill">{savedCount} question{savedCount !== 1 ? 's' : ''} added</span>

// //       {error && <div className="alert alert-error">{error}</div>}

// //       <form onSubmit={handleSaveQuestion} className="question-form">
// //         <div className="form-group">
// //           <label>Question Text</label>
// //           <textarea
// //             rows={3}
// //             value={question.questionText}
// //             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
// //             required
// //           />
// //         </div>

// //         <div className="form-group">
// //           <label>Image (optional)</label>
// //           <input type="file" accept="image/*" onChange={handleImageChange} />
// //           {question.imagePreview && (
// //             <div style={{ marginTop: 10 }}>
// //               <img
// //                 src={question.imagePreview}
// //                 alt="Preview"
// //                 style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, display: 'block', marginBottom: 8 }}
// //               />
// //               <button type="button" onClick={removeImage} className="btn btn-danger">Remove Image</button>
// //             </div>
// //           )}
// //         </div>

// //         <div className="form-group" style={{ maxWidth: 120 }}>
// //           <label>Points</label>
// //           <input
// //             type="number"
// //             min="1"
// //             value={question.points}
// //             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
// //           />
// //         </div>

// //         <hr className="divider" />

// //         <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
// //           Options — select the correct one
// //         </label>

// //         <div style={{ marginTop: 10 }}>
// //           {question.options.map((opt, i) => (
// //             <div key={i} className={`option-row ${opt.isCorrect ? 'correct' : ''}`}>
// //               <input
// //                 type="radio"
// //                 name="correctOption"
// //                 checked={opt.isCorrect}
// //                 onChange={() => handleOptionChange(i, 'isCorrect', true)}
// //               />
// //               <input
// //                 type="text"
// //                 value={opt.optionText}
// //                 onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
// //                 placeholder={`Option ${i + 1}`}
// //                 required
// //                 style={{ flex: 1 }}
// //               />
// //               {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>✓ Correct</span>}
// //               {question.options.length > 2 && (
// //                 <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
// //               )}
// //             </div>
// //           ))}
// //         </div>

// //         <div className="btn-row" style={{ marginTop: 14 }}>
// //           <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
// //             + Add Option
// //           </button>
// //         </div>

// //         <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
// //           {loading ? 'Saving...' : 'Save Question & Add Another'}
// //         </button>
// //       </form>

// //       <div className="publish-bar">
// //         <button
// //           onClick={handlePublish}
// //           disabled={savedCount === 0}
// //           className="btn btn-success"
// //           style={{ width: '100%' }}
// //         >
// //           Publish Exam ({savedCount} question{savedCount !== 1 ? 's' : ''})
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddQuestions;

// //////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const emptyQuestion = () => ({
//   questionText: '',
//   points: 1,
//   image: null,
//   imagePreview: null,
//   options: [
//     { optionText: '', isCorrect: false },
//     { optionText: '', isCorrect: false }
//   ]
// });

// const AddQuestions = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(emptyQuestion());
//   const [savedCount, setSavedCount] = useState(0);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleOptionChange = (index, field, value) => {
//     const updated = [...question.options];
//     if (field === 'isCorrect') {
//       updated.forEach((opt, i) => (opt.isCorrect = i === index));
//     } else {
//       updated[index][field] = value;
//     }
//     setQuestion({ ...question, options: updated });
//   };

//   const addOption = () => {
//     if (question.options.length >= 6) return;
//     setQuestion({ ...question, options: [...question.options, { optionText: '', isCorrect: false }] });
//   };

//   const removeOption = (index) => {
//     if (question.options.length <= 2) return;
//     setQuestion({ ...question, options: question.options.filter((_, i) => i !== index) });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setQuestion({ ...question, image: file, imagePreview: URL.createObjectURL(file) });
//   };

//   const removeImage = () => {
//     setQuestion({ ...question, image: null, imagePreview: null });
//   };

//   const handleSaveQuestion = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!question.options.some(o => o.isCorrect)) {
//       setError('يرجى تحديد إجابة واحدة صحيحة');
//       return;
//     }
//     if (question.options.some(o => !o.optionText.trim())) {
//       setError('يجب كتابة نص لجميع الخيارات');
//       return;
//     }

//     setLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('questionText', question.questionText);
//       formData.append('points', question.points);
//       formData.append('options', JSON.stringify(question.options));
//       if (question.image) {
//         formData.append('image', question.image);
//       }

//       await api.post(`/exams/${examId}/questions`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setSavedCount(savedCount + 1);
//       setQuestion(emptyQuestion());
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل حفظ السؤال');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePublish = async () => {
//     setError('');
//     try {
//       await api.patch(`/exams/${examId}/publish`);
//       navigate('/teacher');
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل نشر الاختبار');
//     }
//   };

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <h2>إضافة الأسئلة</h2>
//       <span className="progress-pill">تمت إضافة {savedCount} سؤال</span>

//       {error && <div className="alert alert-error">{error}</div>}

//       <form onSubmit={handleSaveQuestion} className="question-form">
//         <div className="form-group">
//           <label>نص السؤال</label>
//           <textarea
//             rows={3}
//             value={question.questionText}
//             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>صورة (اختياري)</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//           {question.imagePreview && (
//             <div style={{ marginTop: 10 }}>
//               <img
//                 src={question.imagePreview}
//                 alt="معاينة"
//                 style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, display: 'block', marginBottom: 8 }}
//               />
//               <button type="button" onClick={removeImage} className="btn btn-danger">إزالة الصورة</button>
//             </div>
//           )}
//         </div>

//         <div className="form-group" style={{ maxWidth: 120 }}>
//           <label>الدرجة</label>
//           <input
//             type="number"
//             min="1"
//             value={question.points}
//             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
//           />
//         </div>

//         <hr className="divider" />

//         <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
//           الخيارات — حدد الإجابة الصحيحة
//         </label>

//         <div style={{ marginTop: 10 }}>
//           {question.options.map((opt, i) => (
//             <div key={i} className={`option-row ${opt.isCorrect ? 'correct' : ''}`}>
//               <input
//                 type="radio"
//                 name="correctOption"
//                 checked={opt.isCorrect}
//                 onChange={() => handleOptionChange(i, 'isCorrect', true)}
//               />
//               <input
//                 type="text"
//                 value={opt.optionText}
//                 onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
//                 placeholder={`الخيار ${i + 1}`}
//                 required
//                 style={{ flex: 1 }}
//               />
//               {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>صحيح</span>}
//               {question.options.length > 2 && (
//                 <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="btn-row" style={{ marginTop: 14 }}>
//           <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
//             إضافة خيار
//           </button>
//         </div>

//         <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
//           {loading ? 'جاري الحفظ...' : 'حفظ السؤال وإضافة سؤال آخر'}
//         </button>
//       </form>

//       <div className="publish-bar">
//         <button
//           onClick={handlePublish}
//           disabled={savedCount === 0}
//           className="btn btn-success"
//           style={{ width: '100%' }}
//         >
//           نشر الاختبار ({savedCount} سؤال)
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddQuestions;

/////////////////////////////////////////////////

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const emptyQuestion = () => ({
//   questionText: '',
//   points: 1,
//   image: null,
//   imagePreview: null,
//   options: [
//     { optionText: '', isCorrect: false },
//     { optionText: '', isCorrect: false }
//   ]
// });

// const AddQuestions = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(emptyQuestion());
//   const [existingQuestions, setExistingQuestions] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [deletingId, setDeletingId] = useState(null);

//   const loadQuestions = () => {
//     api.get(`/exams/${examId}/full`)
//       .then(res => setExistingQuestions(res.data.questions || []))
//       .catch(() => {});
//   };

//   useEffect(() => {
//     loadQuestions();
//   }, [examId]);

//   const handleOptionChange = (index, field, value) => {
//     const updated = [...question.options];
//     if (field === 'isCorrect') {
//       updated.forEach((opt, i) => (opt.isCorrect = i === index));
//     } else {
//       updated[index][field] = value;
//     }
//     setQuestion({ ...question, options: updated });
//   };

//   const addOption = () => {
//     if (question.options.length >= 6) return;
//     setQuestion({ ...question, options: [...question.options, { optionText: '', isCorrect: false }] });
//   };

//   const removeOption = (index) => {
//     if (question.options.length <= 2) return;
//     setQuestion({ ...question, options: question.options.filter((_, i) => i !== index) });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setQuestion({ ...question, image: file, imagePreview: URL.createObjectURL(file) });
//   };

//   const removeImage = () => {
//     setQuestion({ ...question, image: null, imagePreview: null });
//   };

//   const handleSaveQuestion = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!question.options.some(o => o.isCorrect)) {
//       setError('يرجى تحديد إجابة واحدة صحيحة');
//       return;
//     }
//     if (question.options.some(o => !o.optionText.trim())) {
//       setError('يجب كتابة نص لجميع الخيارات');
//       return;
//     }

//     setLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('questionText', question.questionText);
//       formData.append('points', question.points);
//       formData.append('options', JSON.stringify(question.options));
//       if (question.image) {
//         formData.append('image', question.image);
//       }

//       await api.post(`/exams/${examId}/questions`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setQuestion(emptyQuestion());
//       loadQuestions();
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل حفظ السؤال');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!window.confirm('هل أنت متأكد من حذف هذا السؤال؟')) return;
//     setDeletingId(questionId);
//     setError('');
//     try {
//       await api.delete(`/exams/questions/${questionId}`);
//       setExistingQuestions(existingQuestions.filter(q => q.id !== questionId));
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل حذف السؤال');
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const handlePublish = async () => {
//     setError('');
//     try {
//       await api.patch(`/exams/${examId}/publish`);
//       navigate('/teacher');
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل نشر الاختبار');
//     }
//   };

//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <h2>إضافة الأسئلة</h2>
//       <span className="progress-pill">يوجد {existingQuestions.length} سؤال في هذا الاختبار</span>

//       {error && <div className="alert alert-error">{error}</div>}

//       {existingQuestions.length > 0 && (
//         <div style={{ marginBottom: 24 }}>
//           <h3 style={{ fontSize: 16 }}>الأسئلة الحالية</h3>
//           {existingQuestions.map((q, idx) => (
//             <div key={q.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
//               <div style={{ flex: 1 }}>
//                 <p style={{ margin: 0, fontWeight: 600 }}>{idx + 1}. {q.questionText}</p>
//                 <p className="subtitle" style={{ margin: '4px 0 0' }}>{q.points} نقطة</p>
//               </div>
//               <button
//                 onClick={() => handleDeleteQuestion(q.id)}
//                 disabled={deletingId === q.id}
//                 className="btn btn-danger"
//                 style={{ width: 'auto', flexShrink: 0 }}
//               >
//                 {deletingId === q.id ? 'جاري الحذف...' : 'حذف'}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       <hr className="divider" />

//       <form onSubmit={handleSaveQuestion} className="question-form">
//         <div className="form-group">
//           <label>نص السؤال</label>
//           <textarea
//             rows={3}
//             value={question.questionText}
//             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>صورة (اختياري)</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//           {question.imagePreview && (
//             <div style={{ marginTop: 10 }}>
//               <img
//                 src={question.imagePreview}
//                 alt="معاينة"
//                 style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, display: 'block', marginBottom: 8 }}
//               />
//               <button type="button" onClick={removeImage} className="btn btn-danger">إزالة الصورة</button>
//             </div>
//           )}
//         </div>

//         <div className="form-group" style={{ maxWidth: 120 }}>
//           <label>الدرجة</label>
//           <input
//             type="number"
//             min="1"
//             value={question.points}
//             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
//           />
//         </div>

//         <hr className="divider" />

//         <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
//           الخيارات — حدد الإجابة الصحيحة
//         </label>

//         <div style={{ marginTop: 10 }}>
//           {question.options.map((opt, i) => (
//             <div key={i} className={`option-row ${opt.isCorrect ? 'correct' : ''}`}>
//               <input
//                 type="radio"
//                 name="correctOption"
//                 checked={opt.isCorrect}
//                 onChange={() => handleOptionChange(i, 'isCorrect', true)}
//               />
//               <input
//                 type="text"
//                 value={opt.optionText}
//                 onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
//                 placeholder={`الخيار ${i + 1}`}
//                 required
//                 style={{ flex: 1 }}
//               />
//               {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>صحيح</span>}
//               {question.options.length > 2 && (
//                 <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="btn-row" style={{ marginTop: 14 }}>
//           <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
//             إضافة خيار
//           </button>
//         </div>

//         <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
//           {loading ? 'جاري الحفظ...' : 'حفظ السؤال وإضافة سؤال آخر'}
//         </button>
//       </form>

//       <div className="publish-bar">
//         <button
//           onClick={handlePublish}
//           disabled={existingQuestions.length === 0}
//           className="btn btn-success"
//           style={{ width: '100%' }}
//         >
//           نشر الاختبار ({existingQuestions.length} سؤال)
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddQuestions;

//////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/axios';

const emptyQuestion = () => ({
  questionText: '',
  points: 1,
  image: null,
  imagePreview: null,
  options: [
    { optionText: '', isCorrect: false },
    { optionText: '', isCorrect: false }
  ]
});

const AddQuestions = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(emptyQuestion());
  const [existingQuestions, setExistingQuestions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const loadQuestions = () => {
    api.get(`/exams/${examId}/full`)
      .then(res => setExistingQuestions(res.data.questions || []))
      .catch(() => {});
  };

  useEffect(() => {
    loadQuestions();
  }, [examId]);

  const handleOptionChange = (index, field, value) => {
    const updated = [...question.options];
    if (field === 'isCorrect') {
      updated.forEach((opt, i) => (opt.isCorrect = i === index));
    } else {
      updated[index][field] = value;
    }
    setQuestion({ ...question, options: updated });
  };

  const addOption = () => {
    if (question.options.length >= 6) return;
    setQuestion({ ...question, options: [...question.options, { optionText: '', isCorrect: false }] });
  };

  const removeOption = (index) => {
    if (question.options.length <= 2) return;
    setQuestion({ ...question, options: question.options.filter((_, i) => i !== index) });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setQuestion({ ...question, image: file, imagePreview: URL.createObjectURL(file) });
  };

  const removeImage = () => {
    setQuestion({ ...question, image: null, imagePreview: null });
  };

  const handleSaveQuestion = async (e) => {
    e.preventDefault();
    setError('');

    if (!question.options.some(o => o.isCorrect)) {
      setError('يرجى تحديد إجابة واحدة صحيحة');
      return;
    }
    if (question.options.some(o => !o.optionText.trim())) {
      setError('يجب كتابة نص لجميع الخيارات');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('questionText', question.questionText);
      formData.append('points', question.points);
      formData.append('options', JSON.stringify(question.options));
      if (question.image) {
        formData.append('image', question.image);
      }

      await api.post(`/exams/${examId}/questions`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setQuestion(emptyQuestion());
      loadQuestions();
    } catch (err) {
      setError(err.response?.data?.message || 'فشل حفظ السؤال');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    if (!window.confirm('هل أنت متأكد من حذف هذا السؤال؟')) return;
    setDeletingId(questionId);
    setError('');
    try {
      await api.delete(`/exams/questions/${questionId}`);
      setExistingQuestions(existingQuestions.filter(q => q.id !== questionId));
    } catch (err) {
      setError(err.response?.data?.message || 'فشل حذف السؤال');
    } finally {
      setDeletingId(null);
    }
  };

  const handlePublish = async () => {
    setError('');
    try {
      await api.patch(`/exams/${examId}/publish`);
      navigate('/teacher');
    } catch (err) {
      setError(err.response?.data?.message || 'فشل نشر الاختبار');
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 pb-28">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">إضافة الأسئلة</h2>
          <span className="self-start sm:self-auto inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full">
            يوجد {existingQuestions.length} سؤال في هذا الاختبار
          </span>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        {existingQuestions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-base font-semibold text-slate-900 mb-3">الأسئلة الحالية</h3>
            <div className="space-y-3">
              {existingQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{idx + 1}. {q.questionText}</p>
                    <p className="text-sm text-slate-500 mt-1">{q.points} نقطة</p>
                  </div>
                  <button
                    onClick={() => handleDeleteQuestion(q.id)}
                    disabled={deletingId === q.id}
                    className="shrink-0 bg-white border border-red-200 text-red-600 text-sm font-medium rounded-lg px-3 py-1.5 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {deletingId === q.id ? 'جاري الحذف...' : 'حذف'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <form onSubmit={handleSaveQuestion} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">نص السؤال</label>
              <textarea
                rows={3}
                value={question.questionText}
                onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">صورة (اختياري)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-slate-600 file:me-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-indigo-700 hover:file:bg-indigo-100"
              />
              {question.imagePreview && (
                <div className="mt-3">
                  <img
                    src={question.imagePreview}
                    alt="معاينة"
                    className="max-w-full max-h-52 rounded-lg block mb-2"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="bg-white border border-red-200 text-red-600 text-sm font-medium rounded-lg px-3 py-1.5 hover:bg-red-50 transition-colors"
                  >
                    إزالة الصورة
                  </button>
                </div>
              )}
            </div>

            <div className="max-w-[140px]">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">الدرجة</label>
              <input
                type="number"
                min="1"
                value={question.points}
                onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            <hr className="border-slate-200" />

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-3">
                الخيارات — حدد الإجابة الصحيحة
              </label>

              <div className="space-y-2">
                {question.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-colors ${
                      opt.isCorrect ? 'border-green-300 bg-green-50' : 'border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="correctOption"
                      checked={opt.isCorrect}
                      onChange={() => handleOptionChange(i, 'isCorrect', true)}
                      className="shrink-0"
                    />
                    <input
                      type="text"
                      value={opt.optionText}
                      onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
                      placeholder={`الخيار ${i + 1}`}
                      required
                      className="flex-1 bg-transparent text-sm text-slate-900 focus:outline-none"
                    />
                    {opt.isCorrect && (
                      <span className="shrink-0 text-xs font-semibold text-green-700">صحيح</span>
                    )}
                    {question.options.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeOption(i)}
                        className="shrink-0 text-red-500 hover:text-red-700 text-sm px-1"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addOption}
                disabled={question.options.length >= 6}
                className="mt-3 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg px-4 py-2 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                إضافة خيار
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
            >
              {loading ? 'جاري الحفظ...' : 'حفظ السؤال وإضافة سؤال آخر'}
            </button>
          </form>
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handlePublish}
            disabled={existingQuestions.length === 0}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
          >
            نشر الاختبار ({existingQuestions.length} سؤال)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;