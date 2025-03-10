import React from 'react';
import './home.scss';

const videos = [
  { videoId: '4FveZhGL8qY', title: 'Introduction to Our Event' },
  { videoId: 'p5-Jy_V1e44', title: 'Behind The Scenes' },
  { videoId: '34dkKNoWMC4', title: 'Special Guest Highlights' },
  { videoId: 'LqPKWBAGFNY', title: 'Keynote Speech Recap' },
];

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="container">
        {/* Title + Sub-title */}
        <div className="section-header">
          <h1 className="subtitle">NHỮNG NGƯỜI THAM GIA</h1>
          <h2 className="title">MỌI NGƯỜI ĐÃ NÓI GÌ?</h2>
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {videos.map((video, index) => (
            <div className="video-item" key={index}>
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
