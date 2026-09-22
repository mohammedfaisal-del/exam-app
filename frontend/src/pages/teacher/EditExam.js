// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../../api/axios';

// // Converts a UTC ISO string from the server into the local value datetime-local inputs expect
// const toLocalInputValue = (isoString) => {
//   if (!isoString) return '';
//   const date = new Date(isoString);
//   const offset = date.getTimezoneOffset();
//   const local = new Date(date.getTime() - offset * 60000);
//   return local.toISOString().slice(0, 16);
// };

// const toUTCISOString = (localDateTimeStr) => {
//   if (!localDateTimeStr) return null;
//   return new Date(localDateTimeStr).toISOString();
// };

// const EditExam = () => {
//   const { examId } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);

//   useEffect(() => {
//     api.get(`/exams/${examId}/full`)
//       .then(res => {
//         const exam = res.data;
//         setForm({
//           title: exam.title,
//           description: exam.description || '',
//           durationMinutes: exam.durationMinutes,
//           startTime: toLocalInputValue(exam.startTime),
//           endTime: toLocalInputValue(exam.endTime),
//           passingPercentage: exam.passingPercentage
//         });
//       })
//       .catch(err => setError(err.response?.data?.message || 'فشل تحميل بيانات الاختبار'))
//       .finally(() => setFetching(false));
//   }, [examId]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
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
//       await api.patch(`/exams/${examId}`, payload);
//       navigate('/teacher/exams');
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل تحديث الاختبار');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (fetching) return <p style={{ textAlign: 'center', marginTop: 40 }}>جاري التحميل...</p>;
//   if (!form) return <div className="page"><div className="alert alert-error">{error}</div></div>;

//   return (
//     <div className="page-narrow" dir="rtl" style={{ textAlign: 'right' }}>
//       <div className="card">
//         <h2>تعديل الاختبار</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>عنوان الاختبار</label>
//             <input name="title" value={form.title} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>الوصف</label>
//             <textarea name="description" value={form.description} onChange={handleChange} rows={3} />
//           </div>
//           <div className="form-group">
//             <label>المدة (بالدقائق)</label>
//             <input type="number" name="durationMinutes" min="1" value={form.durationMinutes} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>وقت البدء</label>
//             <input type="datetime-local" name="startTime" value={form.startTime} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>وقت الانتهاء</label>
//             <input type="datetime-local" name="endTime" value={form.endTime} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>نسبة النجاح المطلوبة (%)</label>
//             <input type="number" name="passingPercentage" min="1" max="100" value={form.passingPercentage} onChange={handleChange} required />
//           </div>
//           <button type="submit" disabled={loading} className="btn btn-primary">
//             {loading ? 'جاري الحفظ...' : 'حفظ التعديلات'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditExam;

//////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../api/axios';

// Converts a UTC ISO string from the server into the local value datetime-local inputs expect
const toLocalInputValue = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
};

const toUTCISOString = (localDateTimeStr) => {
  if (!localDateTimeStr) return null;
  return new Date(localDateTimeStr).toISOString();
};

const EditExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    api.get(`/exams/${examId}/full`)
      .then(res => {
        const exam = res.data;
        setForm({
          title: exam.title,
          description: exam.description || '',
          durationMinutes: exam.durationMinutes,
          startTime: toLocalInputValue(exam.startTime),
          endTime: toLocalInputValue(exam.endTime),
          passingPercentage: exam.passingPercentage
        });
      })
      .catch(err => setError(err.response?.data?.message || 'فشل تحميل بيانات الاختبار'))
      .finally(() => setFetching(false));
  }, [examId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = {
        ...form,
        startTime: toUTCISOString(form.startTime),
        endTime: toUTCISOString(form.endTime)
      };
      await api.patch(`/exams/${examId}`, payload);
      navigate('/teacher/exams');
    } catch (err) {
      setError(err.response?.data?.message || 'فشل تحديث الاختبار');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">جاري التحميل...</p>
      </div>
    );
  }

  if (!form) {
    return (
      <div dir="rtl" className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="max-w-md mx-auto bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 border border-red-100">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">تعديل الاختبار</h2>

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
              {loading ? 'جاري الحفظ...' : 'حفظ التعديلات'}
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

export default EditExam;