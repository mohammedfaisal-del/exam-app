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

////////
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: 0 }}>Welcome, {user?.name}</h2>
          <p className="subtitle" style={{ margin: '4px 0 0' }}>Student Dashboard</p>
        </div>
        <button onClick={logout} className="btn btn-secondary" style={{ width: 'auto' }}>Logout</button>
      </div>

      <div className="btn-row">
        <Link to="/student/exams" className="btn btn-primary" style={{ width: 'auto' }}>
          Browse Exams
        </Link>
        <Link to="/student/results" className="btn btn-secondary" style={{ width: 'auto' }}>
          My Results
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;