// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const StudentDashboard = () => {
//   const { user, logout } = useAuth();
//   return (
//     <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
//       <h2>Welcome, {user?.name} (Student)</h2>
//       <Link to="/student/exams"><button style={{ padding: 10, marginRight: 10 }}>Browse Exams</button></Link>
//       <Link to="/student/results"><button style={{ padding: 10 }}>My Results</button></Link>
//       <br /><br />
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default StudentDashboard;

////////////////////////
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const StudentDashboard = () => {
//   const { user, logout } = useAuth();
//   return (
//     <div className="page">
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
//         <div>
//           <h2 style={{ margin: 0 }}>Welcome, {user?.name}</h2>
//           <p className="subtitle" style={{ margin: '4px 0 0' }}>Student Dashboard</p>
//         </div>
//         <button onClick={logout} className="btn btn-secondary" style={{ width: 'auto' }}>Logout</button>
//       </div>

//       <div className="btn-row">
//         <Link to="/student/exams" className="btn btn-primary" style={{ width: 'auto' }}>
//           Browse Exams
//         </Link>
//         <Link to="/student/results" className="btn btn-secondary" style={{ width: 'auto' }}>
//           My Results
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

////////////////////////////////////////////////
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const StudentDashboard = () => {
//   const { user, logout } = useAuth();
//   return (
//     <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
//         <div>
//           <h2 style={{ margin: 0 }}>مرحباً، {user?.name}</h2>
//           <p className="subtitle" style={{ margin: '4px 0 0' }}>لوحة تحكم الطالب</p>
//         </div>
//         <button onClick={logout} className="btn btn-secondary" style={{ width: 'auto' }}>تسجيل الخروج</button>
//       </div>

//       <div className="btn-row">
//         <Link to="/student/exams" className="btn btn-primary" style={{ width: 'auto' }}>
//           تصفح الاختبارات
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
///////////////////////////////////////////////////////

import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              مرحباً، {user?.name}
            </h2>
            <p className="text-sm text-slate-500 mt-1">لوحة تحكم الطالب</p>
          </div>
          <button
            onClick={logout}
            className="self-start sm:self-auto bg-white border border-slate-300 text-slate-700 font-medium text-sm rounded-lg px-4 py-2 hover:bg-slate-100 transition-colors"
          >
            تسجيل الخروج
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/student/exams"
            className="bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-sm transition"
          >
            <h3 className="font-semibold text-slate-900">تصفح الاختبارات</h3>
            <p className="text-sm text-slate-500 mt-1">استعرض الاختبارات المتاحة وابدأ حل ما يناسبك</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;