// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const AdminDashboard = () => {
//   const { user, logout } = useAuth();
//   return (
//     <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
//       <h2>Welcome, {user?.name} (Admin)</h2>
//       <Link to="/admin/users"><button style={{ padding: 10, marginRight: 10 }}>Manage Users</button></Link>
//       <Link to="/admin/exams"><button style={{ padding: 10, marginRight: 10 }}>All Exams</button></Link>
//       <Link to="/admin/submissions"><button style={{ padding: 10 }}>All Submissions</button></Link>
//       <Link to="/admin/create-teacher"><button style={{ padding: 10, marginRight: 10 }}>إنشاء حساب معلّم</button></Link>
//       <br /><br />
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default AdminDashboard;

//////////////////////////////////////////////////

import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  const cards = [
    { to: '/admin/users', label: 'إدارة المستخدمين', desc: 'عرض وتعديل حسابات الطلاب والمعلمين' },
    { to: '/admin/exams', label: 'جميع الاختبارات', desc: 'استعراض كل الاختبارات في المنصة' },
    { to: '/admin/submissions', label: 'جميع النتائج', desc: 'استعراض نتائج جميع الطلاب' },
    { to: '/admin/create-teacher', label: 'إنشاء حساب معلّم', desc: 'إضافة معلّم جديد إلى المنصة' },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              مرحباً، {user?.name}
            </h2>
            <p className="text-sm text-slate-500 mt-1">لوحة تحكم المشرف</p>
          </div>
          <button
            onClick={logout}
            className="self-start sm:self-auto bg-white border border-slate-300 text-slate-700 font-medium text-sm rounded-lg px-4 py-2 hover:bg-slate-100 transition-colors"
          >
            تسجيل الخروج
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-sm transition"
            >
              <h3 className="font-semibold text-slate-900">{card.label}</h3>
              <p className="text-sm text-slate-500 mt-1">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;