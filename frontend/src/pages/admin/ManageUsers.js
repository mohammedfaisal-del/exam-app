// import { useState, useEffect } from 'react';
// import api from '../../api/axios';
// import { useAuth } from '../../context/AuthContext';

// const ManageUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');
//   const { user: currentUser } = useAuth();

//   const loadUsers = () => {
//     api.get('/admin/users')
//       .then(res => setUsers(res.data))
//       .catch(err => setError(err.response?.data?.message || 'Failed to load users'));
//   };

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const handleRoleChange = async (userId, newRole) => {
//     try {
//       await api.patch(`/admin/users/${userId}/role`, { role: newRole });
//       loadUsers();
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to update role');
//     }
//   };

//   const handleDelete = async (userId) => {
//     if (!window.confirm('Delete this user? This cannot be undone.')) return;
//     try {
//       await api.delete(`/admin/users/${userId}`);
//       loadUsers();
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to delete user');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'sans-serif' }}>
//       <h2>Manage Users</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr style={{ borderBottom: '2px solid #333', textAlign: 'left' }}>
//             <th style={{ padding: 8 }}>Name</th>
//             <th style={{ padding: 8 }}>Email</th>
//             <th style={{ padding: 8 }}>Role</th>
//             <th style={{ padding: 8 }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(u => (
//             <tr key={u.id} style={{ borderBottom: '1px solid #ddd' }}>
//               <td style={{ padding: 8 }}>{u.name}</td>
//               <td style={{ padding: 8 }}>{u.email}</td>
//               <td style={{ padding: 8 }}>
//                 <select
//                   value={u.role}
//                   onChange={(e) => handleRoleChange(u.id, e.target.value)}
//                   disabled={u.id === currentUser.id}
//                 >
//                   <option value="student">student</option>
//                   <option value="teacher">teacher</option>
//                   <option value="admin">admin</option>
//                 </select>
//               </td>
//               <td style={{ padding: 8 }}>
//                 <button
//                   onClick={() => handleDelete(u.id)}
//                   disabled={u.id === currentUser.id}
//                   style={{ color: 'red' }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageUsers;
/////////////////////////////////////////////////////


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

const roleLabels = {
  student: 'طالب',
  teacher: 'معلّم',
  admin: 'مشرف',
};

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const { user: currentUser } = useAuth();

  const loadUsers = () => {
    api.get('/admin/users')
      .then(res => setUsers(res.data))
      .catch(err => setError(err.response?.data?.message || 'فشل تحميل المستخدمين'));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await api.patch(`/admin/users/${userId}/role`, { role: newRole });
      loadUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'فشل تحديث الصلاحية');
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm('هل أنت متأكد من حذف هذا المستخدم؟ لا يمكن التراجع عن هذا الإجراء.')) return;
    try {
      await api.delete(`/admin/users/${userId}`);
      loadUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'فشل حذف المستخدم');
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">إدارة المستخدمين</h2>
          <Link to="/admin" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            الرجوع إلى لوحة التحكم
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3 mb-5 border border-red-100">
            {error}
          </div>
        )}

        {/* Table view on larger screens */}
        <div className="hidden sm:block bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase">
                <th className="px-4 py-3 text-right font-semibold">الاسم</th>
                <th className="px-4 py-3 text-right font-semibold">البريد الإلكتروني</th>
                <th className="px-4 py-3 text-right font-semibold">الصلاحية</th>
                <th className="px-4 py-3 text-right font-semibold">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-slate-900 font-medium">{u.name}</td>
                  <td className="px-4 py-3 text-slate-500">{u.email}</td>
                  <td className="px-4 py-3">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      disabled={u.id === currentUser.id}
                      className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm disabled:bg-slate-100 disabled:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="student">{roleLabels.student}</option>
                      <option value="teacher">{roleLabels.teacher}</option>
                      <option value="admin">{roleLabels.admin}</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(u.id)}
                      disabled={u.id === currentUser.id}
                      className="text-red-600 font-medium text-sm hover:text-red-700 disabled:text-slate-300 disabled:cursor-not-allowed"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card view on small screens */}
        <div className="sm:hidden space-y-3">
          {users.map(u => (
            <div key={u.id} className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="font-semibold text-slate-900">{u.name}</p>
              <p className="text-sm text-slate-500 mt-0.5">{u.email}</p>
              <div className="flex items-center justify-between mt-3 gap-3">
                <select
                  value={u.role}
                  onChange={(e) => handleRoleChange(u.id, e.target.value)}
                  disabled={u.id === currentUser.id}
                  className="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm disabled:bg-slate-100 disabled:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="student">{roleLabels.student}</option>
                  <option value="teacher">{roleLabels.teacher}</option>
                  <option value="admin">{roleLabels.admin}</option>
                </select>
                <button
                  onClick={() => handleDelete(u.id)}
                  disabled={u.id === currentUser.id}
                  className="text-red-600 font-medium text-sm hover:text-red-700 disabled:text-slate-300 disabled:cursor-not-allowed"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;