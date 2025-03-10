import React, { useState } from 'react';
import { Eye } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { blogImages } from '../../Utlits/blogList';
import Lightbox from '../Shared/LightBox/LightBox';
const Blog = ({ date, heading, image, index }) => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };
  return (
    <>
      <div
        className="service__unique__item pb-40 pt-40"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="left__service">
          <div className="serial__adjust">
            <div className="cont">
              <span className="dates"> {date} </span>
              <h3>
                <Link to={'/blog-details'}>{heading}</Link>
              </h3>
            </div>
          </div>
          <div className="opa__thumb imgc">
            <button
              type="button"
              onClick={() => openLightbox(index)}
              style={{ padding: 0, border: 'none', background: 'none' }}
            >
              <img src={image} alt="img-opa" />
            </button>
          </div>
        </div>
        <div className="common__icon imgc">
          <Eye className="i" />
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox images={blogImages} setLightboxOpen={setLightboxOpen} currentId={currentId} />
      )}
    </>
  );
};

export default Blog;
