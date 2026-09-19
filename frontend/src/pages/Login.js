// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       login(res.data.token, res.data.user);

//       const role = res.data.user.role;
//       if (role === 'student') navigate('/student');
//       else if (role === 'teacher') navigate('/teacher');
//       else if (role === 'admin') navigate('/admin');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: '80px auto', fontFamily: 'sans-serif' }}>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: 12 }}>
//           <label>Email</label><br />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '100%', padding: 8 }}
//           />
//         </div>
//         <div style={{ marginBottom: 12 }}>
//           <label>Password</label><br />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: 8 }}
//           />
//         </div>
//         <button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//       <p style={{ marginTop: 16 }}>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

////////////////////STYLED
// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       login(res.data.token, res.data.user);

//       const role = res.data.user.role;
//       if (role === 'student') navigate('/student');
//       else if (role === 'teacher') navigate('/teacher');
//       else if (role === 'admin') navigate('/admin');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page-narrow">
//       <div className="card">
//         <h2>Login</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//         <p className="subtitle" style={{ marginTop: 16 }}>
//           Don't have an account? <Link to="/register">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

//////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       login(res.data.token, res.data.user);

//       const role = res.data.user.role;
//       if (role === 'student') navigate('/student');
//       else if (role === 'teacher') navigate('/teacher');
//       else if (role === 'admin') navigate('/admin');
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل تسجيل الدخول، تحقق من البريد الإلكتروني وكلمة المرور');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         {/* <div className="auth-logo">📝</div> */}
//         <h2 className="auth-title">تسجيل الدخول</h2>
//         <p className="auth-subtitle">أهلاً بك من جديد، سجّل الدخول لمتابعة الاختبارات</p>

//         {error && <div className="alert alert-error">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>البريد الإلكتروني</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="example@email.com"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>كلمة المرور</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
//           </button>
//         </form>

//         <p className="auth-footer">
//           ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

///////////////////////////////////////////////

// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api/axios';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       login(res.data.token, res.data.user);

//       const role = res.data.user.role;
//       if (role === 'student') navigate('/student');
//       else if (role === 'teacher') navigate('/teacher');
//       else if (role === 'admin') navigate('/admin');
//     } catch (err) {
//       setError(err.response?.data?.message || 'فشل تسجيل الدخول، تحقق من البريد الإلكتروني وكلمة المرور');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <div className="auth-logo">📝</div>
//         <h2 className="auth-title">تسجيل الدخول</h2>
//         <p className="auth-subtitle">أهلاً بك من جديد، سجّل الدخول لمتابعة الاختبارات</p>

//         {error && <div className="alert alert-error">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>البريد الإلكتروني</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="example@email.com"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>كلمة المرور</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
//           </button>
//         </form>

//         <p className="auth-footer">
//           ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
//         </p>
//       </div>

//      <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: '#999' }}>
//   Mohammed Faisal Production —{' '}
//   <a href="https://your-website-here.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>
//     Visit Website
//   </a>
// </p>
//     </div>
//   );
// };

// export default Login;

///////////////////////////////////////////////

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token, res.data.user);

      const role = res.data.user.role;
      if (role === "student") navigate("/student");
      else if (role === "teacher") navigate("/teacher");
      else if (role === "admin") navigate("/admin");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "فشل تسجيل الدخول، تحقق من البريد الإلكتروني وكلمة المرور",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* <div className="auth-logo">📝</div> */}
        <h2 className="auth-title">تسجيل الدخول</h2>
        <p className="auth-subtitle">
          أهلاً بك من جديد، سجّل الدخول لمتابعة الاختبارات
        </p>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label>كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        <p className="auth-footer">
          ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
        </p>

        <p
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: 15,
            fontWeight: 600,
            color: "#666",
          }}
        >
          Mohammed Faisal Production —{" "}
          <a
            href="https://site.faisalproduction.website/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4f46e5", fontWeight: 700 }}
          >
            زيارة الموقع
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
