// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const TeacherDashboard = () => {
//   const { user, logout } = useAuth();
//   return (
//     <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
//       <h2>Welcome, {user?.name} (Teacher)</h2>
//       <Link to="/teacher/create-exam"><button style={{ padding: 10, marginRight: 10 }}>+ Create New Exam</button></Link>
//       <Link to="/teacher/exams"><button style={{ padding: 10 }}>My Exams</button></Link>
//       <br /><br />
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default TeacherDashboard;

//////////////////////////////////////////

// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const TeacherDashboard = () => {
//   const { user, logout } = useAuth();
//   return (
//     <div className="page">
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
//         <div>
//           <h2 style={{ margin: 0 }}>Welcome, {user?.name}</h2>
//           <p className="subtitle" style={{ margin: '4px 0 0' }}>Teacher Dashboard</p>
//         </div>
//         <button onClick={logout} className="btn btn-secondary" style={{ width: 'auto' }}>Logout</button>
//       </div>

//       <div className="btn-row">
//         <Link to="/teacher/create-exam" className="btn btn-primary" style={{ width: 'auto' }}>
//           + Create New Exam
//         </Link>
//         <Link to="/teacher/exams" className="btn btn-secondary" style={{ width: 'auto' }}>
//           My Exams
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;

///////////////////////////////////////////////////////


import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const TeacherDashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div className="page" dir="rtl" style={{ textAlign: 'right' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: 0 }}>مرحباً، {user?.name}</h2>
          <p className="subtitle" style={{ margin: '4px 0 0' }}>لوحة تحكم المعلّم</p>
        </div>
        <button onClick={logout} className="btn btn-secondary" style={{ width: 'auto' }}>تسجيل الخروج</button>
      </div>

      <div className="btn-row">
        <Link to="/teacher/create-exam" className="btn btn-primary" style={{ width: 'auto' }}>
          إنشاء اختبار جديد
        </Link>
        <Link to="/teacher/exams" className="btn btn-secondary" style={{ width: 'auto' }}>
          اختباراتي
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;