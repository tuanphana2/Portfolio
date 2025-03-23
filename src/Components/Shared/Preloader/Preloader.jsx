import React from 'react';

import manimg from '../../../assets/img/banner/banner-bg(NTD) (2).png';
const Preloader = () => {
  return (
    <div className="preloader__matias">
      <div className="box text-center">
        <div className="matias mb-10">
          <img src={manimg} alt="img" />
        </div>
        <span className="fz-30 mati fw-600 text-uppercase">NTD</span>
      </div>
    </div>
  );
};

export default Preloader;
