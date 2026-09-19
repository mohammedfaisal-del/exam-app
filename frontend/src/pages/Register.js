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
    <div className="auth-page">
      <div className="auth-card">
        {/* <div className="auth-logo">📝</div> */}
        <h2 className="auth-title">إنشاء حساب جديد</h2>
        <p className="auth-subtitle">أدخل بياناتك للانضمام إلى منصة الاختبارات</p>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>الاسم الكامل</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="اكتب اسمك الكامل"
              required
            />
          </div>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label>كلمة المرور</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="6 أحرف على الأقل"
              required
              minLength={6}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
          </button>
        </form>

        <p className="auth-footer">
          لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;