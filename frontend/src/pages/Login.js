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

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../api/axios";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       login(res.data.token, res.data.user);

//       const role = res.data.user.role;
//       if (role === "student") navigate("/student");
//       else if (role === "teacher") navigate("/teacher");
//       else if (role === "admin") navigate("/admin");
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "فشل تسجيل الدخول، تحقق من البريد الإلكتروني وكلمة المرور",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         {/* <div className="auth-logo">📝</div> */}
//         <h2 className="auth-title">تسجيل الدخول</h2>
//         <p className="auth-subtitle">
//           أهلاً بك من جديد، سجّل الدخول لمتابعة الاختبارات
//         </p>

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
//             {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
//           </button>
//         </form>

//         <p className="auth-footer">
//           ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
//         </p>

//         <p
//           style={{
//             textAlign: "center",
//             marginTop: 16,
//             fontSize: 15,
//             fontWeight: 600,
//             color: "#666",
//           }}
//         >
//           Mohammed Faisal Production —{" "}
//           <a
//             href="https://site.faisalproduction.website/"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#4f46e5", fontWeight: 700 }}
//           >
//             زيارة الموقع
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

//////////////////////////CSS TAILWIND DESIGN /////////////////////////

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../api/axios";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       login(res.data.token, res.data.user);

//       const role = res.data.user.role;
//       if (role === "student") navigate("/student");
//       else if (role === "teacher") navigate("/teacher");
//       else if (role === "admin") navigate("/admin");
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "فشل تسجيل الدخول، تحقق من البريد الإلكتروني وكلمة المرور",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 px-4"
//     >
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//         <div className="text-center mb-6">
//           <div className="text-4xl mb-2">📝</div>
//           <h2 className="text-2xl font-bold text-slate-800">تسجيل الدخول</h2>
//           <p className="text-sm text-slate-500 mt-1">
//             أهلاً بك من جديد، سجّل الدخول لمتابعة الاختبارات
//           </p>
//         </div>

//         {error && (
//           <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-4 border border-red-100">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               البريد الإلكتروني
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="example@email.com"
//               required
//               className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-1">
//               كلمة المرور
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               required
//               className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-slate-300 text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
//           >
//             {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
//           </button>
//         </form>

//         <p className="text-center text-sm text-slate-500 mt-6">
//           ليس لديك حساب؟{" "}
//           <Link
//             to="/register"
//             className="text-primary-600 font-semibold hover:underline"
//           >
//             إنشاء حساب جديد
//           </Link>
//         </p>

//         <p className="text-center text-sm font-semibold text-slate-400 mt-4">
//           Mohammed Faisal Production —{" "}
//           <a
//             href="https://site.faisalproduction.website/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-primary-600 font-bold hover:underline"
//           >
//             زيارة الموقع
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

///////////////////////////////////////////////////////


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
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              تسجيل الدخول
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              أهلاً بك من جديد، سجّل الدخول لمتابعة الاختبارات
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 text-sm transition-colors"
            >
              {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            ليس لديك حساب؟{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              إنشاء حساب جديد
            </Link>
          </p>
        </div>

        <p className="text-center text-xs sm:text-sm font-medium text-slate-400 mt-6">
          Mohammed Faisal Production —{" "}
          
           <a href="https://site.faisalproduction.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold hover:text-indigo-700"
          >
            زيارة الموقع
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;