import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h2>Welcome, {user?.name} (Admin)</h2>
      <Link to="/admin/users"><button style={{ padding: 10, marginRight: 10 }}>Manage Users</button></Link>
      <Link to="/admin/exams"><button style={{ padding: 10, marginRight: 10 }}>All Exams</button></Link>
      <Link to="/admin/submissions"><button style={{ padding: 10 }}>All Submissions</button></Link>
      <Link to="/admin/create-teacher"><button style={{ padding: 10, marginRight: 10 }}>إنشاء حساب معلّم</button></Link>
      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;