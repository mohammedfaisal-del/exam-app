// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';

// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);
//     try {
//       await api.post('/auth/register', form);
//       setSuccess('Registered successfully! Redirecting to login...');
//       setTimeout(() => navigate('/login'), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: '80px auto', fontFamily: 'sans-serif' }}>
//       <h2>Register</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: 12 }}>
//           <label>Name</label><br />
//           <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: 8 }} />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>Email</label><br />
//           <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: 8 }} />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>Password</label><br />
//           <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={6} style={{ width: '100%', padding: 8 }} />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>I am a:</label><br />
//           <select name="role" value={form.role} onChange={handleChange} style={{ width: '100%', padding: 8 }}>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//           </select>
//         </div>
//         <button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//       <p style={{ marginTop: 16 }}>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

//////////////////////////////////////////////


// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';

// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);
//     try {
//       await api.post('/auth/register', form);
//       setSuccess('Registered successfully! Redirecting to login...');
//       setTimeout(() => navigate('/login'), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page-narrow">
//       <div className="card">
//         <h2>Register</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name</label>
//             <input name="name" value={form.name} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={6} />
//           </div>
//           <div className="form-group">
//             <label>I am a:</label>
//             <select name="role" value={form.role} onChange={handleChange}>
//               <option value="student">Student</option>
//               <option value="teacher">Teacher</option>
//             </select>
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//         <p className="subtitle" style={{ marginTop: 16 }}>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

///////////////////////////////////////////////////

// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';

// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);
//     try {
//       await api.post('/auth/register', form);
//       setSuccess('تم إنشاء الحساب بنجاح! جاري تحويلك لتسجيل الدخول...');
//       setTimeout(() => navigate('/login'), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل إنشاء الحساب، حاول مرة أخرى');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         {/* <div className="auth-logo">📝</div> */}
//         <h2 className="auth-title">إنشاء حساب جديد</h2>
//         <p className="auth-subtitle">أدخل بياناتك للانضمام إلى منصة الاختبارات</p>

//         {error && <div className="alert alert-error">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>الاسم الكامل</label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="اكتب اسمك الكامل"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>البريد الإلكتروني</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="example@email.com"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>كلمة المرور</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="6 أحرف على الأقل"
//               required
//               minLength={6}
//             />
//           </div>
//           <div className="form-group">
//             <label>أنا:</label>
//             <select name="role" value={form.role} onChange={handleChange}>
//               <option value="student">طالب</option>
//               <option value="teacher">معلّم</option>
//             </select>
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
//           </button>
//         </form>

//         <p className="auth-footer">
//           لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

/////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';

// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);
//     try {
//       await api.post('/auth/register', form);
//       setSuccess('تم إنشاء الحساب بنجاح! جاري تحويلك لتسجيل الدخول...');
//       setTimeout(() => navigate('/login'), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل إنشاء الحساب، حاول مرة أخرى');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         {/* <div className="auth-logo">📝</div> */}
//         <h2 className="auth-title">إنشاء حساب جديد</h2>
//         <p className="auth-subtitle">أدخل بياناتك للانضمام إلى منصة الاختبارات</p>

//         {error && <div className="alert alert-error">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>الاسم الكامل</label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="اكتب اسمك الكامل"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>البريد الإلكتروني</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="example@email.com"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>كلمة المرور</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="6 أحرف على الأقل"
//               required
//               minLength={6}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
//           </button>
//         </form>

//         <p className="auth-footer">
//           لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

///////////////////////////////////////////////////

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.post('/auth/register', form);
      setSuccess('تم إنشاء الحساب بنجاح! جاري تحويلك لتسجيل الدخول...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'فشل إنشاء الحساب، حاول مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">إنشاء حساب جديد</h2>
            <p className="text-sm text-slate-500 mt-2">أدخل بياناتك للانضمام إلى منصة الاختبارات</p>
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
                placeholder="اكتب اسمك الكامل"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">كلمة المرور</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="6 أحرف على الأقل"
                required
                minLength={6}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
            >
              {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            لديك حساب بالفعل؟{' '}
            <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-700">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;