// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const CreateExam = () => {
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     durationMinutes: 30,
//     startTime: '',
//     endTime: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const res = await api.post('/exams', form);
//       // Redirect straight to adding questions for this new exam
//       navigate(`/teacher/exams/${res.data.id}/questions`);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to create exam');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       <h2>Create Exam</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: 12 }}>
//           <label>Title</label><br />
//           <input name="title" value={form.title} onChange={handleChange} required style={{ width: '100%', padding: 8 }} />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>Description</label><br />
//           <textarea name="description" value={form.description} onChange={handleChange} style={{ width: '100%', padding: 8 }} />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>Duration (minutes)</label><br />
//           <input type="number" name="durationMinutes" min="1" value={form.durationMinutes} onChange={handleChange} required style={{ width: '100%', padding: 8 }} />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>Start Time</label><br />
//           <input type="datetime-local" name="startTime" value={form.startTime} onChange={handleChange} required style={{ width: '100%', padding: 8 }} />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>End Time</label><br />
//           <input type="datetime-local" name="endTime" value={form.endTime} onChange={handleChange} required style={{ width: '100%', padding: 8 }} />
//         </div>
//         <button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
//           {loading ? 'Creating...' : 'Create Exam & Add Questions'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateExam;

////////////////////////////
////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const CreateExam = () => {
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     durationMinutes: 30,
//     startTime: '',
//     endTime: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const res = await api.post('/exams', form);
//       navigate(`/teacher/exams/${res.data.id}/questions`);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to create exam');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page-narrow">
//       <div className="card">
//         <h2>Create Exam</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Title</label>
//             <input name="title" value={form.title} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Description</label>
//             <textarea name="description" value={form.description} onChange={handleChange} rows={3} />
//           </div>
//           <div className="form-group">
//             <label>Duration (minutes)</label>
//             <input type="number" name="durationMinutes" min="1" value={form.durationMinutes} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Start Time</label>
//             <input type="datetime-local" name="startTime" value={form.startTime} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>End Time</label>
//             <input type="datetime-local" name="endTime" value={form.endTime} onChange={handleChange} required />
//           </div>
//           <button type="submit" disabled={loading} className="btn btn-primary">
//             {loading ? 'Creating...' : 'Create Exam & Add Questions'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateExam;

/////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// const CreateExam = () => {
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     durationMinutes: 30,
//     startTime: '',
//     endTime: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Converts a datetime-local string (interpreted as the BROWSER's local time)
//   // into a proper UTC ISO timestamp, so the server stores the correct absolute moment
//   // regardless of what timezone the server itself runs in.
//   const toUTCISOString = (localDateTimeStr) => {
//     if (!localDateTimeStr) return null;
//     return new Date(localDateTimeStr).toISOString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const payload = {
//         ...form,
//         startTime: toUTCISOString(form.startTime),
//         endTime: toUTCISOString(form.endTime)
//       };
//       const res = await api.post('/exams', payload);
//       navigate(`/teacher/exams/${res.data.id}/questions`);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to create exam');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page-narrow">
//       <div className="card">
//         <h2>Create Exam</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Title</label>
//             <input name="title" value={form.title} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Description</label>
//             <textarea name="description" value={form.description} onChange={handleChange} rows={3} />
//           </div>
//           <div className="form-group">
//             <label>Duration (minutes)</label>
//             <input type="number" name="durationMinutes" min="1" value={form.durationMinutes} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Start Time</label>
//             <input type="datetime-local" name="startTime" value={form.startTime} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>End Time</label>
//             <input type="datetime-local" name="endTime" value={form.endTime} onChange={handleChange} required />
//           </div>
//           <button type="submit" disabled={loading} className="btn btn-primary">
//             {loading ? 'Creating...' : 'Create Exam & Add Questions'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateExam;

//////////////////////////////////////////////////////////////

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// const CreateExam = () => {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     durationMinutes: 30,
//     startTime: "",
//     endTime: "",
//     passingPercentage: 50,
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Converts a datetime-local string (interpreted as the BROWSER's local time)
//   // into a proper UTC ISO timestamp, so the server stores the correct absolute moment
//   // regardless of what timezone the server itself runs in.
//   const toUTCISOString = (localDateTimeStr) => {
//     if (!localDateTimeStr) return null;
//     return new Date(localDateTimeStr).toISOString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const payload = {
//         ...form,
//         startTime: toUTCISOString(form.startTime),
//         endTime: toUTCISOString(form.endTime),
//       };
//       const res = await api.post("/exams", payload);
//       navigate(`/teacher/exams/${res.data.id}/questions`);
//     } catch (err) {
//       setError(err.response?.data?.message || "فشل إنشاء الاختبار");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page-narrow" dir="rtl" style={{ textAlign: "right" }}>
//       <div className="card">
//         <h2>إنشاء اختبار جديد</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>عنوان الاختبار</label>
//             <input
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>الوصف</label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               rows={3}
//             />
//           </div>
//           <div className="form-group">
//             <label>المدة (بالدقائق)</label>
//             <input
//               type="number"
//               name="durationMinutes"
//               min="1"
//               value={form.durationMinutes}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>وقت البدء</label>
//             <input
//               type="datetime-local"
//               name="startTime"
//               value={form.startTime}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>وقت الانتهاء</label>
//             <input
//               type="datetime-local"
//               name="endTime"
//               value={form.endTime}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>نسبة النجاح المطلوبة (%)</label>
//             <input
//               type="number"
//               name="passingPercentage"
//               min="1"
//               max="100"
//               value={form.passingPercentage}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" disabled={loading} className="btn btn-primary">
//             {loading ? "جاري الإنشاء..." : "إنشاء الاختبار وإضافة الأسئلة"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateExam;


////////////////////////////////////////////////////////////

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";

const CreateExam = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    durationMinutes: 30,
    startTime: "",
    endTime: "",
    passingPercentage: 50,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Converts a datetime-local string (interpreted as the BROWSER's local time)
  // into a proper UTC ISO timestamp, so the server stores the correct absolute moment
  // regardless of what timezone the server itself runs in.
  const toUTCISOString = (localDateTimeStr) => {
    if (!localDateTimeStr) return null;
    return new Date(localDateTimeStr).toISOString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = {
        ...form,
        startTime: toUTCISOString(form.startTime),
        endTime: toUTCISOString(form.endTime),
      };
      const res = await api.post("/exams", payload);
      navigate(`/teacher/exams/${res.data.id}/questions`);
    } catch (err) {
      setError(err.response?.data?.message || "فشل إنشاء الاختبار");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">إنشاء اختبار جديد</h2>

          {error && (
            <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">عنوان الاختبار</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">الوصف</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">المدة (بالدقائق)</label>
              <input
                type="number"
                name="durationMinutes"
                min="1"
                value={form.durationMinutes}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">وقت البدء</label>
              <input
                type="datetime-local"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">وقت الانتهاء</label>
              <input
                type="datetime-local"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">نسبة النجاح المطلوبة (%)</label>
              <input
                type="number"
                name="passingPercentage"
                min="1"
                max="100"
                value={form.passingPercentage}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
            >
              {loading ? "جاري الإنشاء..." : "إنشاء الاختبار وإضافة الأسئلة"}
            </button>
          </form>

          <Link
            to="/teacher/exams"
            className="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 mt-6"
          >
            الرجوع إلى اختباراتي
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateExam;