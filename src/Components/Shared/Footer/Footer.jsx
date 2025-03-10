import React from 'react';
import { Facebook, Twitter, Linkedin, Globe, Instagram, ArrowUpShort } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    id: 1,
    icon: <Facebook />,
    url: 'https://www.facebook.com/thaiduybe',
  },
  {
    id: 2,
    icon: <Twitter />,
    url: 'https://twitter.com/davidmatias',
  },
  {
    id: 3,
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/davidmatias',
  },
  {
    id: 4,
    icon: <Globe />,
    url: 'https://www.davidmatias.com',
  },
  {
    id: 5,
    icon: <Instagram />,
    url: 'https://www.instagram.com/davidmatias',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer__about">
                <p>Hello, I’m David Matias, Website & User Interface Designer based in London.</p>
                <a href="mailto:davidmatias333@gmail.com" className="footer__email">
                  davidmatias333@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="footer__social">
                {socialLinks.map(({ id, icon, url }) => (
                  <li key={id}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <ul className="footer__links">
            <li>
              <a href="#0">Terms & Condition</a>
              <span className="divider">|</span>
              <a href="#0">Privacy Policy</a>
            </li>
          </ul>
          <ul>
            <li>Copyright 2009 © BE TRAINING - Vườn Ươm Doanh Nhân</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
