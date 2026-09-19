// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const emptyQuestion = () => ({
//   questionText: '',
//   points: 1,
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
//       // Single-correct-answer style: only one option can be correct
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

//   const handleSaveQuestion = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!question.options.some(o => o.isCorrect)) {
//       setError('Please mark one option as correct');
//       return;
//     }
//     if (question.options.some(o => !o.optionText.trim())) {
//       setError('All options must have text');
//       return;
//     }

//     setLoading(true);
//     try {
//       await api.post(`/exams/${examId}/questions`, question);
//       setSavedCount(savedCount + 1);
//       setQuestion(emptyQuestion());
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to save question');
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
//       setError(err.response?.data?.message || 'Failed to publish exam');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       <h2>Add Questions</h2>
//       <p>{savedCount} question(s) added so far.</p>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <form onSubmit={handleSaveQuestion} style={{ border: '1px solid #ccc', padding: 20, borderRadius: 8, marginBottom: 20 }}>
//         <div style={{ marginBottom: 12 }}>
//           <label>Question Text</label><br />
//           <textarea
//             value={question.questionText}
//             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
//             required
//             style={{ width: '100%', padding: 8 }}
//           />
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>Points</label><br />
//           <input
//             type="number"
//             min="1"
//             value={question.points}
//             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
//             style={{ width: 100, padding: 8 }}
//           />
//         </div>

//         <label>Options (select the correct one):</label>
//         {question.options.map((opt, i) => (
//           <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
//             <input
//               type="radio"
//               name="correctOption"
//               checked={opt.isCorrect}
//               onChange={() => handleOptionChange(i, 'isCorrect', true)}
//             />
//             <input
//               type="text"
//               value={opt.optionText}
//               onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
//               placeholder={`Option ${i + 1}`}
//               required
//               style={{ flex: 1, padding: 8 }}
//             />
//             {question.options.length > 2 && (
//               <button type="button" onClick={() => removeOption(i)}>✕</button>
//             )}
//           </div>
//         ))}

//         <button type="button" onClick={addOption} disabled={question.options.length >= 6} style={{ marginBottom: 16 }}>
//           + Add Option
//         </button>
//         <br />
//         <button type="submit" disabled={loading} style={{ padding: 10, width: '100%' }}>
//           {loading ? 'Saving...' : 'Save Question & Add Another'}
//         </button>
//       </form>

//       <button
//         onClick={handlePublish}
//         disabled={savedCount === 0}
//         style={{ padding: 10, width: '100%', background: '#2e7d32', color: 'white', border: 'none' }}
//       >
//         Publish Exam ({savedCount} question{savedCount !== 1 ? 's' : ''})
//       </button>
//     </div>
//   );
// };

// export default AddQuestions;

////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const emptyQuestion = () => ({
//   questionText: '',
//   points: 1,
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

//   const handleSaveQuestion = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!question.options.some(o => o.isCorrect)) {
//       setError('Please mark one option as correct');
//       return;
//     }
//     if (question.options.some(o => !o.optionText.trim())) {
//       setError('All options must have text');
//       return;
//     }

//     setLoading(true);
//     try {
//       await api.post(`/exams/${examId}/questions`, question);
//       setSavedCount(savedCount + 1);
//       setQuestion(emptyQuestion());
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to save question');
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
//       setError(err.response?.data?.message || 'Failed to publish exam');
//     }
//   };

//   return (
//     <div className="page">
//       <h2>Add Questions</h2>
//       <span className="progress-pill">{savedCount} question{savedCount !== 1 ? 's' : ''} added</span>

//       {error && <div className="alert alert-error">{error}</div>}

//       <form onSubmit={handleSaveQuestion} className="question-form">
//         <div className="form-group">
//           <label>Question Text</label>
//           <textarea
//             rows={3}
//             value={question.questionText}
//             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
//             required
//           />
//         </div>

//         <div className="form-group" style={{ maxWidth: 120 }}>
//           <label>Points</label>
//           <input
//             type="number"
//             min="1"
//             value={question.points}
//             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
//           />
//         </div>

//         <hr className="divider" />

//         <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
//           Options — select the correct one
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
//                 placeholder={`Option ${i + 1}`}
//                 required
//                 style={{ flex: 1 }}
//               />
//               {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>✓ Correct</span>}
//               {question.options.length > 2 && (
//                 <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="btn-row" style={{ marginTop: 14 }}>
//           <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
//             + Add Option
//           </button>
//         </div>

//         <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
//           {loading ? 'Saving...' : 'Save Question & Add Another'}
//         </button>
//       </form>

//       <div className="publish-bar">
//         <button
//           onClick={handlePublish}
//           disabled={savedCount === 0}
//           className="btn btn-success"
//           style={{ width: '100%' }}
//         >
//           Publish Exam ({savedCount} question{savedCount !== 1 ? 's' : ''})
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddQuestions;

////////////////////////////////////////////////
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
//       setError('Please mark one option as correct');
//       return;
//     }
//     if (question.options.some(o => !o.optionText.trim())) {
//       setError('All options must have text');
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
//       setError(err.response?.data?.message || 'Failed to save question');
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
//       setError(err.response?.data?.message || 'Failed to publish exam');
//     }
//   };

//   return (
//     <div className="page">
//       <h2>Add Questions</h2>
//       <span className="progress-pill">{savedCount} question{savedCount !== 1 ? 's' : ''} added</span>

//       {error && <div className="alert alert-error">{error}</div>}

//       <form onSubmit={handleSaveQuestion} className="question-form">
//         <div className="form-group">
//           <label>Question Text</label>
//           <textarea
//             rows={3}
//             value={question.questionText}
//             onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Image (optional)</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//           {question.imagePreview && (
//             <div style={{ marginTop: 10 }}>
//               <img
//                 src={question.imagePreview}
//                 alt="Preview"
//                 style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, display: 'block', marginBottom: 8 }}
//               />
//               <button type="button" onClick={removeImage} className="btn btn-danger">Remove Image</button>
//             </div>
//           )}
//         </div>

//         <div className="form-group" style={{ maxWidth: 120 }}>
//           <label>Points</label>
//           <input
//             type="number"
//             min="1"
//             value={question.points}
//             onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
//           />
//         </div>

//         <hr className="divider" />

//         <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
//           Options — select the correct one
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
//                 placeholder={`Option ${i + 1}`}
//                 required
//                 style={{ flex: 1 }}
//               />
//               {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>✓ Correct</span>}
//               {question.options.length > 2 && (
//                 <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="btn-row" style={{ marginTop: 14 }}>
//           <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
//             + Add Option
//           </button>
//         </div>

//         <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
//           {loading ? 'Saving...' : 'Save Question & Add Another'}
//         </button>
//       </form>

//       <div className="publish-bar">
//         <button
//           onClick={handlePublish}
//           disabled={savedCount === 0}
//           className="btn btn-success"
//           style={{ width: '100%' }}
//         >
//           Publish Exam ({savedCount} question{savedCount !== 1 ? 's' : ''})
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddQuestions;

//////////////////////////////////////////////////////
import { useState } from 'react';
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
  const [savedCount, setSavedCount] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      setSavedCount(savedCount + 1);
      setQuestion(emptyQuestion());
    } catch (err) {
      setError(err.response?.data?.message || 'فشل حفظ السؤال');
    } finally {
      setLoading(false);
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
    <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
      <h2>إضافة الأسئلة</h2>
      <span className="progress-pill">تمت إضافة {savedCount} سؤال</span>

      {error && <div className="alert alert-error">{error}</div>}

      <form onSubmit={handleSaveQuestion} className="question-form">
        <div className="form-group">
          <label>نص السؤال</label>
          <textarea
            rows={3}
            value={question.questionText}
            onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>صورة (اختياري)</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {question.imagePreview && (
            <div style={{ marginTop: 10 }}>
              <img
                src={question.imagePreview}
                alt="معاينة"
                style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, display: 'block', marginBottom: 8 }}
              />
              <button type="button" onClick={removeImage} className="btn btn-danger">إزالة الصورة</button>
            </div>
          )}
        </div>

        <div className="form-group" style={{ maxWidth: 120 }}>
          <label>الدرجة</label>
          <input
            type="number"
            min="1"
            value={question.points}
            onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
          />
        </div>

        <hr className="divider" />

        <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
          الخيارات — حدد الإجابة الصحيحة
        </label>

        <div style={{ marginTop: 10 }}>
          {question.options.map((opt, i) => (
            <div key={i} className={`option-row ${opt.isCorrect ? 'correct' : ''}`}>
              <input
                type="radio"
                name="correctOption"
                checked={opt.isCorrect}
                onChange={() => handleOptionChange(i, 'isCorrect', true)}
              />
              <input
                type="text"
                value={opt.optionText}
                onChange={(e) => handleOptionChange(i, 'optionText', e.target.value)}
                placeholder={`الخيار ${i + 1}`}
                required
                style={{ flex: 1 }}
              />
              {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>صحيح</span>}
              {question.options.length > 2 && (
                <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
              )}
            </div>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: 14 }}>
          <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
            إضافة خيار
          </button>
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
          {loading ? 'جاري الحفظ...' : 'حفظ السؤال وإضافة سؤال آخر'}
        </button>
      </form>

      <div className="publish-bar">
        <button
          onClick={handlePublish}
          disabled={savedCount === 0}
          className="btn btn-success"
          style={{ width: '100%' }}
        >
          نشر الاختبار ({savedCount} سؤال)
        </button>
      </div>
    </div>
  );
};

export default AddQuestions;