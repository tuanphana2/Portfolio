import React, { useState } from "react";
import "./register.scss";

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown} 
      role="button"
      tabIndex={0} 
    >
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h1><span>BE TRAINING</span> VƯỜN ƯƠM DOANH NHÂN</h1>
        <p>Để lại Email và Zalo để nhận ngay bí quyết Làm Chủ Doanh Nghiệp</p>
        <form onSubmit={handleSubmit} className="registration-form">
          <label htmlFor="fullName">Họ và tên</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            placeholder="Nhập họ và tên" 
            required
          />

          <label htmlFor="email">Email của bạn *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Nhập email" 
            required
          />

          <label htmlFor="phone">Số điện thoại Zalo *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Nhập số điện thoại" 
            required
          />

          <button type="submit">Đăng Ký Ngay ▶</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
