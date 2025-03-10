import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import './home.scss';

const ServiceDetails = () => {
  return (
    <>
      <section className="imagination-story">
        {/* Title & Sub-title - Để ở ngoài, đứng độc lập */}
        <div className="intro-box">
          <h2 className="main-title">You’re not Alone…</h2>
          <p className="sub-title">I get you. I was you. And I’m here to tell you, there is a better way.</p>
        </div>

        {/* Content Box - Đặt trong bảng (khung tối) */}
        <div className="container">
          <div className="content-box">
            <h3 className="title">Imagine...</h3>
            <p className="description">
              Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.
            </p>
            <p className="description">
              From childhood dreams of flying through the stars, to building the most innovative technologies of the future, imagination fuels every great achievement.
            </p>
            <p className="description">
              In this world, imagination is not a luxury — it's a necessity.
            </p>
            <p className="description">
              Close your eyes. What do you see? A vast ocean? A hidden city among the clouds? Or a new future waiting to be shaped by your mind? That is imagination at work.
            </p>
            <p className="description">
              Let your imagination run wild. After all, the most extraordinary journeys begin in the mind.
            </p>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default ServiceDetails;
