import axios from 'axios';
import { Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import PodcastPlayer from './PodcastPlayer';
import PageHeader from '../../Components/Shared/PageHeader/PageHeader';

import './podcast.scss';

const Podcast = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [expandedEpisodes, setExpandedEpisodes] = useState({});

  const API_URL = import.meta.env.VITE_API_URL || 'https://ntd-portfolio-be.onrender.com';

  // Fetch dữ liệu từ backend
  useEffect(() => {
    axios
      .get(`${API_URL}/podcasts`)
      .then((response) => {
        const fetchedEpisodes = response.data.map((item, index) => ({
          title: item.title[0],
          duration: item['itunes:duration'] ? item['itunes:duration'][0] : 'Unknown',
          date: item.pubDate[0],
          description: item.description[0],
          image: item['itunes:image']
            ? item['itunes:image'][0].$.href
            : 'https://via.placeholder.com/300',
          audioUrl: item.enclosure[0].$.url,
        }));
        setEpisodes(fetchedEpisodes);
      })
      .catch((error) => console.error('Lỗi lấy RSS:', error));
  }, []);

  const handlePlayEpisode = (episode) => {
    setSelectedEpisode(episode);
  };

  const playPreviousEpisode = () => {
    const currentIndex = episodes.findIndex((ep) => ep === selectedEpisode);
    if (currentIndex > 0) {
      handlePlayEpisode(episodes[currentIndex - 1]);
    }
  };

  const playNextEpisode = () => {
    const currentIndex = episodes.findIndex((ep) => ep === selectedEpisode);
    if (currentIndex < episodes.length - 1) {
      handlePlayEpisode(episodes[currentIndex + 1]);
    }
  };

  // Toggle trạng thái mở rộng mô tả
  const toggleExpand = (index) => {
    setExpandedEpisodes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <PageHeader heading="Let's Start Something" page="Let's Start Something" />
      <div className="podcastPage">
        <div className="episodesContainer">
          <h2 className="sectionTitle">Recent Episodes</h2>
          <div className="episodeList">
            {episodes.length > 0 ? (
              episodes.map((episode, index) => (
                <div key={index} className="episodeItem">
                  <button className="playButton" onClick={() => handlePlayEpisode(episode)}>
                    <Play />
                  </button>
                  <div className="episodeDetails">
                    <p className="episodeNumber">Episode {index + 1}</p>
                    <h3 className="episodeTitle">{episode.title}</h3>
                  </div>

                  <div className="episodeDescription-content">
                    <p
                      className={`episodeDescription ${expandedEpisodes[index] ? 'expanded' : 'collapsed'}`}
                      dangerouslySetInnerHTML={{ __html: episode.description }}
                    ></p>

                    <button className="toggleButton" onClick={() => toggleExpand(index)}>
                      {expandedEpisodes[index] ? 'Xem bớt' : 'Xem thêm'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading episodes...</p>
            )}
          </div>
        </div>

        {selectedEpisode && (
          <PodcastPlayer
            selectedEpisode={selectedEpisode}
            onClose={() => setSelectedEpisode(null)}
            onNext={playNextEpisode}
            onPrev={playPreviousEpisode}
          />
        )}
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Podcast;
