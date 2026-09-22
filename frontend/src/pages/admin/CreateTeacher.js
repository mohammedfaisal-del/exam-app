// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../api/axios';

// const CreateTeacher = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);
//     try {
//       await api.post('/admin/teachers', form);
//       setSuccess('تم إنشاء حساب المعلّم بنجاح');
//       setForm({ name: '', email: '', password: '' });
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل إنشاء حساب المعلّم');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page-narrow" dir="rtl" style={{ textAlign: 'right' }}>
//       <div className="card">
//         <h2>إنشاء حساب معلّم</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>الاسم الكامل</label>
//             <input name="name" value={form.name} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>البريد الإلكتروني</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>كلمة المرور</label>
//             <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={6} />
//           </div>
//           <button type="submit" disabled={loading} className="btn btn-primary">
//             {loading ? 'جاري الإنشاء...' : 'إنشاء حساب المعلّم'}
//           </button>
//         </form>
//         <Link to="/admin" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 16 }}>
//           الرجوع إلى لوحة التحكم
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CreateTeacher;

//////////////////////////////////////////////////////////////////
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const CreateTeacher = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.post('/admin/teachers', form);
      setSuccess('تم إنشاء حساب المعلّم بنجاح');
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'فشل إنشاء حساب المعلّم');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">إنشاء حساب معلّم</h2>
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 text-green-700 text-sm rounded-lg px-4 py-3 mb-5 border border-green-100">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">الاسم الكامل</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">كلمة المرور</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
            >
              {loading ? 'جاري الإنشاء...' : 'إنشاء حساب المعلّم'}
            </button>
          </form>

          <Link
            to="/admin"
            className="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 mt-6"
          >
            الرجوع إلى لوحة التحكم
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateTeacher;