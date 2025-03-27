import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { username, password });

      // Lưu token vào localStorage
      localStorage.setItem("token", res.data.token);

      // Chuyển hướng đến trang chính sau khi đăng nhập
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Đăng nhập thất bại, vui lòng thử lại!");
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
          />
          <button onClick={login} disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </div>
      </section>
    </div>
  );
}
