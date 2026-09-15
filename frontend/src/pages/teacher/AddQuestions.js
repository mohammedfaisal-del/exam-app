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
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/axios';

const emptyQuestion = () => ({
  questionText: '',
  points: 1,
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

  const handleSaveQuestion = async (e) => {
    e.preventDefault();
    setError('');

    if (!question.options.some(o => o.isCorrect)) {
      setError('Please mark one option as correct');
      return;
    }
    if (question.options.some(o => !o.optionText.trim())) {
      setError('All options must have text');
      return;
    }

    setLoading(true);
    try {
      await api.post(`/exams/${examId}/questions`, question);
      setSavedCount(savedCount + 1);
      setQuestion(emptyQuestion());
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save question');
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
      setError(err.response?.data?.message || 'Failed to publish exam');
    }
  };

  return (
    <div className="page">
      <h2>Add Questions</h2>
      <span className="progress-pill">{savedCount} question{savedCount !== 1 ? 's' : ''} added</span>

      {error && <div className="alert alert-error">{error}</div>}

      <form onSubmit={handleSaveQuestion} className="question-form">
        <div className="form-group">
          <label>Question Text</label>
          <textarea
            rows={3}
            value={question.questionText}
            onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
            required
          />
        </div>

        <div className="form-group" style={{ maxWidth: 120 }}>
          <label>Points</label>
          <input
            type="number"
            min="1"
            value={question.points}
            onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })}
          />
        </div>

        <hr className="divider" />

        <label style={{ fontWeight: 600, fontSize: 14, color: '#333' }}>
          Options — select the correct one
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
                placeholder={`Option ${i + 1}`}
                required
                style={{ flex: 1 }}
              />
              {opt.isCorrect && <span style={{ color: '#4caf50', fontSize: 13, fontWeight: 600 }}>✓ Correct</span>}
              {question.options.length > 2 && (
                <button type="button" onClick={() => removeOption(i)} className="icon-btn">✕</button>
              )}
            </div>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: 14 }}>
          <button type="button" onClick={addOption} disabled={question.options.length >= 6} className="btn btn-secondary">
            + Add Option
          </button>
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 8 }}>
          {loading ? 'Saving...' : 'Save Question & Add Another'}
        </button>
      </form>

      <div className="publish-bar">
        <button
          onClick={handlePublish}
          disabled={savedCount === 0}
          className="btn btn-success"
          style={{ width: '100%' }}
        >
          Publish Exam ({savedCount} question{savedCount !== 1 ? 's' : ''})
        </button>
      </div>
    </div>
  );
};

export default AddQuestions;