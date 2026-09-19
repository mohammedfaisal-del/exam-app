import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const CreateTeacher = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.post('/admin/teachers', form);
      setSuccess('تم إنشاء حساب المعلّم بنجاح');
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'فشل إنشاء حساب المعلّم');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-narrow" dir="rtl" style={{ textAlign: 'right' }}>
      <div className="card">
        <h2>إنشاء حساب معلّم</h2>
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>الاسم الكامل</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>كلمة المرور</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={6} />
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? 'جاري الإنشاء...' : 'إنشاء حساب المعلّم'}
          </button>
        </form>
        <Link to="/admin" className="btn btn-secondary" style={{ width: 'auto', display: 'inline-block', marginTop: 16 }}>
          الرجوع إلى لوحة التحكم
        </Link>
      </div>
    </div>
  );
};

export default CreateTeacher;