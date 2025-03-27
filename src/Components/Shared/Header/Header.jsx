import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../../../assets/img/logo/logo.png';
import Register from '../../Register/Register';

const menuList = [
  {
    id: 1,
    path: '/about',
    name: 'GIỚI THIỆU',
  },
  {
    id: 2,
    path: '/programs',
    name: 'CHƯƠNG TRÌNH',
    dropDown: [
      {
        id: 1,
        path: 'https://betraining.org/',
        name: 'Be Training',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        id: 2,
        path: '/',
        name: 'Mentor X',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
  {
    id: 3,
    path: '/success',
    name: 'THÀNH CÔNG',
  },
  {
    id: 4,
    path: '/careers',
    name: 'SỰ NGHIỆP',
  },
  {
    id: 5,
    path: '/podcast',
    name: 'Podcast',
  },
  {
    id: 6,
    path: '/all-blog',
    name: 'BÀI VIẾT',
  },
  {
    id: 7,
    path: '/contact',
    name: 'LIÊN HỆ',
  },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropDownId, setDropDownId] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;

    scrollTop >= 35
      ? header.classList.add('menu-fixed', 'animated', 'fadeInDown')
      : header.classList.remove('menu-fixed');
  };

  const handleHeaderToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleSubMenu = (id) => {
    setDropDownId(id);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={`header-section `}>
      <div className="container">
        <div className="header-wrapper">
          <div className="main__logo">
            <Link to={'/'} className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={`main-menu ${menuActive ? 'active' : ''}`}>
            {menuList.map(({ id, name, path, dropDown, section }) => {
              return (
                <li key={id}>
                  <HashLink
                    smooth
                    to={`${path}${section ? section : ''}`}
                    onClick={() => handleSubMenu(id)}
                  >
                    {name}
                  </HashLink>
                  {dropDown?.length && (
                    <ul className={`sub-menu ${dropDownId === id ? 'sub-menu_active' : ''}`}>
                      {dropDown.map(({ id, name, path, target, rel }) => (
                        <li key={id}>
                          {path.startsWith('http') ? (
                            <a href={path} target={target} rel={rel}>
                              {name}
                            </a>
                          ) : (
                            <HashLink smooth to={path}>
                              {name}
                            </HashLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="menu__components d-flex align-items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="d-flex fw-500 cmn--btn align-items-center gap-2"
            >
              <span className="get__text">Đăng Ký Ngay</span>
              <span>
                <ArrowRight className="fz-20" />
              </span>
            </button>
            {isModalOpen && <Register onClose={() => setIsModalOpen(false)} />}
            <button
              onClick={handleHeaderToggle}
              className={`header-bar d-lg-none ${menuActive ? 'active' : ''}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
