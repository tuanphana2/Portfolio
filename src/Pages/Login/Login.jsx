import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(`${API_URL}/auth/login`, { username, password });

      console.log('Response từ API:', res.data); // Kiểm tra toàn bộ response

      const token = res.data?.token; // Kiểm tra key 'token' có tồn tại không
      if (!token) {
        throw new Error('API không trả về token');
      }

      sessionStorage.setItem('token', token);
      console.log('Token đã lưu:', sessionStorage.getItem('token'));

      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      setError(error.response?.data?.message || 'Đăng nhập thất bại, vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <section className="behind-header"></section>
      <section className="login-section">
        <div className="container">
          <h1>Đăng nhập Admin</h1>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login()}
          />
          <button onClick={login} disabled={loading}>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </div>
      </section>
    </div>
  );
}
