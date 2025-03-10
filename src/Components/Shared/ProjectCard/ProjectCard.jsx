import React from 'react';
import { ArrowUpRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, heading, subHeading, index, openLightbox, navigate }) => {
  return (
    <div
      className={`project__item  ${index !== 2 && 'cus__mb60'}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <button onClick={() => openLightbox(index)} className="thumb mb-30 imgc">
        <img src={image} alt="img" />
      </button>
      <div className="content d-flex align-items-center justify-content-between gap-2">
        <Link to={navigate} className="left__cont">
          <span className="base mb-2 mb-xxl-3 d-block text-uppercase">{heading}</span>
          <h3>{subHeading}</h3>
        </Link>
        <button onClick={() => openLightbox(index)} className="common__icon imgc">
          <ArrowUpRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
